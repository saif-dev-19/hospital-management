import { FaCalendarAlt, FaPlus, FaSearch, FaClock } from "react-icons/fa";

const Appointments = () => {
  const appointments = [
    { id: 1, patient: "John Doe", doctor: "Dr. Emily Smith", date: "2025-11-17", time: "10:00 AM", type: "Consultation", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", doctor: "Dr. Michael Johnson", date: "2025-11-17", time: "11:30 AM", type: "Follow-up", status: "Pending" },
    { id: 3, patient: "Mike Wilson", doctor: "Dr. Sarah Brown", date: "2025-11-17", time: "02:00 PM", type: "Check-up", status: "Confirmed" },
    { id: 4, patient: "Sarah Davis", doctor: "Dr. David Taylor", date: "2025-11-18", time: "09:00 AM", type: "Surgery", status: "Confirmed" },
    { id: 5, patient: "Robert Brown", doctor: "Dr. Lisa Anderson", date: "2025-11-18", time: "03:30 PM", type: "Consultation", status: "Cancelled" },
    { id: 6, patient: "Emily Johnson", doctor: "Dr. James Wilson", date: "2025-11-19", time: "10:30 AM", type: "Therapy", status: "Pending" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Appointments</h1>
          <p className="text-gray-600">Manage and schedule all appointments</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
          <FaPlus />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition"
            />
          </div>
          <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition">
            <option>All Dates</option>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This Week</option>
          </select>
          <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition">
            <option>All Types</option>
            <option>Consultation</option>
            <option>Follow-up</option>
            <option>Check-up</option>
            <option>Surgery</option>
          </select>
          <select className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-2xl" />
                  <div>
                    <div className="font-bold text-lg">{apt.date}</div>
                    <div className="text-pink-100 text-sm">{apt.time}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  apt.status === "Confirmed" ? "bg-green-500" :
                  apt.status === "Pending" ? "bg-yellow-500" :
                  "bg-red-500"
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
                  <span className="text-gray-600">Doctor</span>
                  <span className="font-semibold text-gray-800">{apt.doctor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                    {apt.type}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  View Details
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
