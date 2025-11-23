import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUserMd, FaMoneyBillWave, FaSpinner, FaNotesMedical } from "react-icons/fa";
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
      console.error("Error response:", err.response?.data);
      setError(err.response?.data?.detail || "Failed to load appointment details");
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (datetime) => {
    if (!datetime) return "N/A";
    const date = new Date(datetime);
    return date.toLocaleString();
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
        <FaSpinner className="animate-spin text-4xl text-rose-600" />
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
          onClick={() => navigate("/patient/appointments")}
          className="mt-4 flex items-center space-x-2 text-rose-600 hover:text-rose-700"
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
        onClick={() => navigate("/patient/appointments")}
        className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 mb-6 font-semibold"
      >
        <FaArrowLeft />
        <span>Back to Appointments</span>
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Appointment Details</h1>
          <p className="text-rose-100">ID: #{appointment.id}</p>
        </div>

        <div className="p-8 space-y-6">
          {/* Status */}
          <div className="flex items-center justify-between pb-6 border-b">
            <span className="text-gray-600 font-semibold">Status</span>
            <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(appointment.status)}`}>
              {appointment.status?.toUpperCase()}
            </span>
          </div>

          {/* Date & Time */}
          <div className="flex items-start space-x-4 pb-6 border-b">
            <FaCalendarAlt className="text-2xl text-rose-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Date & Time</h3>
              <p className="text-gray-600">{formatDateTime(appointment.datetime)}</p>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex items-start space-x-4 pb-6 border-b">
            <FaUserMd className="text-2xl text-rose-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Doctor</h3>
              <p className="text-gray-600">{appointment.doctor_name || "N/A"}</p>
              {appointment.doctor_specialty && (
                <p className="text-sm text-gray-500 mt-1">Specialty: {appointment.doctor_specialty}</p>
              )}
            </div>
          </div>

          {/* Purpose */}
          {appointment.purpose && (
            <div className="flex items-start space-x-4 pb-6 border-b">
              <FaNotesMedical className="text-2xl text-rose-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Purpose</h3>
                <p className="text-gray-600">{appointment.purpose}</p>
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
              <FaMoneyBillWave className="text-2xl text-rose-600 mt-1" />
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
