import { FaCalendarCheck, FaUsers, FaClock, FaCheckCircle, FaStethoscope } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Today's Appointments", value: "12", icon: <FaCalendarCheck />, color: "from-teal-500 to-teal-600" },
    { title: "Total Patients", value: "145", icon: <FaUsers />, color: "from-cyan-500 to-cyan-600" },
    { title: "Pending Reviews", value: "8", icon: <FaClock />, color: "from-blue-500 to-blue-600" },
    { title: "Completed Today", value: "5", icon: <FaCheckCircle />, color: "from-green-500 to-green-600" },
  ];

  const todayAppointments = [
    { id: 1, patient: "John Doe", time: "09:00 AM", type: "Consultation", status: "Upcoming" },
    { id: 2, patient: "Jane Smith", time: "10:30 AM", type: "Follow-up", status: "In Progress" },
    { id: 3, patient: "Mike Wilson", time: "11:00 AM", type: "Check-up", status: "Upcoming" },
    { id: 4, patient: "Sarah Davis", time: "02:00 PM", type: "Consultation", status: "Upcoming" },
  ];

  const recentPatients = [
    { name: "John Doe", condition: "Hypertension", lastVisit: "2025-11-15", status: "Stable" },
    { name: "Jane Smith", condition: "Diabetes", lastVisit: "2025-11-14", status: "Monitoring" },
    { name: "Mike Wilson", condition: "Asthma", lastVisit: "2025-11-10", status: "Stable" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back, Doctor!</h1>
        <p className="text-gray-600">Here's your schedule for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition text-white`}
          >
            <div className="text-4xl mb-4 opacity-80">{stat.icon}</div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-white/80 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FaCalendarCheck className="text-2xl text-teal-600" />
            <h2 className="text-2xl font-bold text-gray-800">Today's Schedule</h2>
          </div>
          <div className="space-y-3">
            {todayAppointments.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:shadow-md transition">
                <div>
                  <div className="font-semibold text-gray-800">{apt.patient}</div>
                  <div className="text-sm text-gray-600">{apt.type} • {apt.time}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  apt.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                  "bg-teal-100 text-teal-700"
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
            View All Appointments
          </button>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FaStethoscope className="text-2xl text-cyan-600" />
            <h2 className="text-2xl font-bold text-gray-800">Recent Patients</h2>
          </div>
          <div className="space-y-3">
            {recentPatients.map((patient, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-800">{patient.name}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    patient.status === "Stable" ? "bg-green-100 text-green-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {patient.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{patient.condition}</div>
                <div className="text-xs text-gray-500 mt-1">Last visit: {patient.lastVisit}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
            View All Patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
