import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaSearch, FaSpinner } from "react-icons/fa";
import API from "../../api/axios";

const Appointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await API.get("/appointments/");
      console.log("Appointments API response:", response.data);
      
      // Handle both array and object responses
      const appointmentsData = Array.isArray(response.data) 
        ? response.data 
        : response.data.results || [];
      
      console.log("Processed appointments:", appointmentsData);
      setAppointments(appointmentsData);
      setError("");
    } catch (err) {
      console.error("Failed to load appointments:", err);
      console.error("Error response:", err.response?.data);
      setError(err.response?.data?.detail || "Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      const response = await API.patch(`/appointments/${appointmentId}/`, { status: newStatus });
      console.log("Status update response:", response.data);
      
      // Update local state
      setAppointments(appointments.map(apt => 
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      ));
      
      console.log(`Appointment ${appointmentId} status updated to ${newStatus}`);
    } catch (err) {
      console.error("Failed to update status:", err);
      console.error("Error response:", err.response?.data);
      alert(err.response?.data?.detail || "Failed to update appointment status");
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "N/A";
    // timeStr is in format "HH:MM:SS"
    const [hours, minutes] = timeStr.split(':');
    return `${hours}:${minutes}`;
  };

  const getPatientName = (apt) => {
    if (apt.patient?.first_name || apt.patient?.last_name) {
      return `${apt.patient.first_name || ''} ${apt.patient.last_name || ''}`.trim();
    }
    return apt.patient?.profile?.full_name || "N/A";
  };

  const getDoctorName = (apt) => {
    if (apt.doctor?.first_name || apt.doctor?.last_name) {
      return `${apt.doctor.first_name || ''} ${apt.doctor.last_name || ''}`.trim();
    }
    return apt.doctor?.profile?.full_name || "N/A";
  };

  const filteredAppointments = appointments.filter(apt => {
    const patientName = getPatientName(apt);
    const doctorName = getDoctorName(apt);
    const matchesSearch = 
      patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || apt.status?.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-pink-600" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">All Appointments</h1>
          <p className="text-gray-600">Manage all appointments ({appointments.length} total)</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by patient or doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {filteredAppointments.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No appointments found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAppointments.map((apt) => {
            const date = formatDate(apt.date);
            const time = formatTime(apt.time);
            const patientName = getPatientName(apt);
            const doctorName = getDoctorName(apt);
            
            return (
              <div key={apt.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaCalendarAlt className="text-2xl" />
                      <div>
                        <div className="font-bold text-lg">{date}</div>
                        <div className="text-pink-100 text-sm">{time}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      apt.status === "approved" ? "bg-green-500" :
                      apt.status === "pending" ? "bg-yellow-500" :
                      apt.status === "completed" ? "bg-blue-500" :
                      "bg-red-500"
                    }`}>
                      {apt.status?.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Patient</span>
                      <span className="font-semibold text-gray-800">{patientName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Doctor</span>
                      <span className="font-semibold text-gray-800">{doctorName}</span>
                    </div>
                    {apt.type && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Type</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                          {apt.type}
                        </span>
                      </div>
                    )}
                    {apt.specialty && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Specialty</span>
                        <span className="text-gray-800 text-sm">{apt.specialty}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => navigate(`/admin/appointments/${apt.id}`)}
                      className="w-full py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      View Details
                    </button>
                    
                    {/* Only show status change buttons if status is pending */}
                    {apt.status?.toLowerCase() === "pending" ? (
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => handleStatusChange(apt.id, "completed")}
                          className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 transition"
                        >
                          Complete
                        </button>
                        <button 
                          onClick={() => handleStatusChange(apt.id, "cancelled")}
                          className="py-2 bg-red-100 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-200 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-2 text-sm text-gray-500 italic">
                        Status locked: {apt.status?.toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Appointments;
