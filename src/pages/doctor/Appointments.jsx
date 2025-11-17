import { FaCalendarAlt, FaSearch, FaClock } from "react-icons/fa";

const Appointments = () => {
  const appointments = [
    { id: 1, patient: "John Doe", time: "09:00 AM", date: "2025-11-17", type: "Consultation", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", time: "10:30 AM", date: "2025-11-17", type: "Follow-up", status: "In Progress" },
    { id: 3, patient: "Mike Wilson", time: "11:00 AM", date: "2025-11-17", type: "Check-up", status: "Confirmed" },
    { id: 4, patient: "Sarah Davis", time: "02:00 PM", date: "2025-11-17", type: "Consultation", status: "Confirmed" },
    { id: 5, patient: "Robert Brown", time: "03:30 PM", date: "2025-11-18", type: "Follow-up", status: "Pending" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Appointments</h1>
        <p className="text-gray-600">Manage your patient appointments</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-2xl" />
                  <div>
                    <div className="font-bold text-lg">{apt.date}</div>
                    <div className="text-teal-100 text-sm">{apt.time}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  apt.status === "Confirmed" ? "bg-green-500" :
                  apt.status === "In Progress" ? "bg-yellow-500" :
                  "bg-blue-500"
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Patient</span>
                  <span className="font-semibold text-gray-800">{apt.patient}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                    {apt.type}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  Start Consultation
                </button>
                <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
