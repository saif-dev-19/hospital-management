import { FaCalendarAlt, FaSearch } from "react-icons/fa";

const MyAppointments = () => {
  const appointments = [
    { id: 1, doctor: "Dr. Emily Smith", specialty: "Cardiology", date: "2025-11-18", time: "10:00 AM", type: "Consultation", status: "Confirmed" },
    { id: 2, doctor: "Dr. Michael Johnson", specialty: "Neurology", date: "2025-11-20", time: "02:00 PM", type: "Follow-up", status: "Confirmed" },
    { id: 3, doctor: "Dr. Sarah Brown", specialty: "Pediatrics", date: "2025-11-22", time: "11:00 AM", type: "Check-up", status: "Pending" },
    { id: 4, doctor: "Dr. David Taylor", specialty: "Orthopedics", date: "2025-11-15", time: "09:00 AM", type: "Consultation", status: "Completed" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Appointments</h1>
        <p className="text-gray-600">View and manage your appointments</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-2xl" />
                  <div>
                    <div className="font-bold text-lg">{apt.date}</div>
                    <div className="text-rose-100 text-sm">{apt.time}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  apt.status === "Confirmed" ? "bg-green-500" :
                  apt.status === "Pending" ? "bg-yellow-500" :
                  "bg-gray-500"
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Doctor</span>
                  <span className="font-semibold text-gray-800">{apt.doctor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Specialty</span>
                  <span className="font-semibold text-gray-800">{apt.specialty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
                    {apt.type}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  View Details
                </button>
                {apt.status !== "Completed" && (
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
