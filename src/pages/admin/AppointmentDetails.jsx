import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUserMd, FaUser, FaMoneyBillWave, FaSpinner, FaNotesMedical } from "react-icons/fa";
import API from "../../api/axios";

const AppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAppointmentDetails();
  }, [id]);

  const fetchAppointmentDetails = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/appointments/${id}/`);
      console.log("Appointment details:", response.data);
      setAppointment(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to load appointment:", err);
      setError("Failed to load appointment details");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus) => {
    try {
      await API.patch(`/appointments/${id}/`, { status: newStatus });
      setAppointment({ ...appointment, status: newStatus });
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update appointment status");
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "N/A";
    const [hours, minutes] = timeStr.split(':');
    return `${hours}:${minutes}`;
  };

  const getPatientName = (apt) => {
    if (!apt) return "N/A";
    if (apt.patient?.first_name || apt.patient?.last_name) {
      return `${apt.patient.first_name || ''} ${apt.patient.last_name || ''}`.trim();
    }
    return apt.patient?.profile?.full_name || "N/A";
  };

  const getDoctorName = (apt) => {
    if (!apt) return "N/A";
    if (apt.doctor?.first_name || apt.doctor?.last_name) {
      return `${apt.doctor.first_name || ''} ${apt.doctor.last_name || ''}`.trim();
    }
    return apt.doctor?.profile?.full_name || "N/A";
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved": return "bg-green-100 text-green-700";
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "completed": return "bg-blue-100 text-blue-700";
      case "cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-pink-600" />
      </div>
    );
  }

  if (error || !appointment) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <p className="text-red-700">{error || "Appointment not found"}</p>
        </div>
        <button
          onClick={() => navigate("/admin/appointments")}
          className="mt-4 flex items-center space-x-2 text-pink-600 hover:text-pink-700"
        >
          <FaArrowLeft />
          <span>Back to Appointments</span>
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/admin/appointments")}
        className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-6 font-semibold"
      >
        <FaArrowLeft />
        <span>Back to Appointments</span>
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Appointment Details</h1>
          <p className="text-pink-100">ID: #{appointment.id}</p>
        </div>

        <div className="p-8 space-y-6">
          {/* Status with Change Buttons */}
          <div className="pb-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-semibold">Status</span>
              <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(appointment.status)}`}>
                {appointment.status?.toUpperCase()}
              </span>
            </div>
            
            {/* Only allow status change if current status is pending */}
            {appointment.status?.toLowerCase() === "pending" ? (
              <div>
                <p className="text-sm text-gray-600 mb-2">Change status to:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => handleStatusChange("completed")}
                    className="py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 transition"
                  >
                    Complete
                  </button>
                  <button 
                    onClick={() => handleStatusChange("cancelled")}
                    className="py-2 bg-red-100 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Status is locked.</span> 
                  <br />
                  {appointment.status?.toLowerCase() === "approved" && "Approved appointments cannot be changed."}
                  {appointment.status?.toLowerCase() === "completed" && "Completed appointments cannot be changed."}
                  {appointment.status?.toLowerCase() === "cancelled" && "Cancelled appointments cannot be changed."}
                </p>
              </div>
            )}
          </div>

          {/* Date & Time */}
          <div className="flex items-start space-x-4 pb-6 border-b">
            <FaCalendarAlt className="text-2xl text-pink-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Date & Time</h3>
              <p className="text-gray-600">{formatDate(appointment.date)} at {formatTime(appointment.time)}</p>
            </div>
          </div>

          {/* Patient Info */}
          <div className="flex items-start space-x-4 pb-6 border-b">
            <FaUser className="text-2xl text-pink-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Patient</h3>
              <p className="text-gray-600">{getPatientName(appointment)}</p>
              {appointment.patient?.profile?.phone && (
                <p className="text-sm text-gray-500 mt-1">Phone: {appointment.patient.profile.phone}</p>
              )}
              {appointment.patient?.age && (
                <p className="text-sm text-gray-500">Age: {appointment.patient.age}</p>
              )}
              {appointment.patient?.blood_group && (
                <p className="text-sm text-gray-500">Blood Group: {appointment.patient.blood_group}</p>
              )}
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex items-start space-x-4 pb-6 border-b">
            <FaUserMd className="text-2xl text-pink-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Doctor</h3>
              <p className="text-gray-600">{getDoctorName(appointment)}</p>
              {appointment.doctor?.specialty?.name && (
                <p className="text-sm text-gray-500 mt-1">Specialty: {appointment.doctor.specialty.name}</p>
              )}
              {appointment.doctor?.profile?.phone && (
                <p className="text-sm text-gray-500">Phone: {appointment.doctor.profile.phone}</p>
              )}
            </div>
          </div>

          {/* Type */}
          {appointment.type && (
            <div className="flex items-start space-x-4 pb-6 border-b">
              <FaNotesMedical className="text-2xl text-pink-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Appointment Type</h3>
                <p className="text-gray-600">{appointment.type}</p>
              </div>
            </div>
          )}

          {/* Specialty */}
          {appointment.specialty && (
            <div className="flex items-start space-x-4 pb-6 border-b">
              <FaNotesMedical className="text-2xl text-pink-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Specialty</h3>
                <p className="text-gray-600">{appointment.specialty}</p>
              </div>
            </div>
          )}

          {/* Symptoms */}
          {appointment.symptoms && (
            <div className="pb-6 border-b">
              <h3 className="font-semibold text-gray-800 mb-2">Symptoms</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{appointment.symptoms}</p>
            </div>
          )}

          {/* Notes */}
          {appointment.notes && (
            <div className="pb-6 border-b">
              <h3 className="font-semibold text-gray-800 mb-2">Doctor's Notes</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{appointment.notes}</p>
            </div>
          )}

          {/* Payment Info */}
          {appointment.payment && (
            <div className="flex items-start space-x-4 pb-6 border-b">
              <FaMoneyBillWave className="text-2xl text-pink-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Payment</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Amount: ${appointment.payment.amount}</p>
                  <p className="text-gray-600">Method: {appointment.payment.method}</p>
                  <p className="text-gray-600">Status: {appointment.payment.status}</p>
                </div>
              </div>
            </div>
          )}

          {/* Created At */}
          {/* <div className="text-sm text-gray-500">
            <p>Created: {formatDateTime(appointment.created_at)}</p>
            {appointment.updated_at && (
              <p>Last Updated: {formatDateTime(appointment.updated_at)}</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
