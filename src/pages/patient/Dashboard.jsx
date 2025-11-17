import { FaCalendarCheck, FaUserMd, FaFileMedical, FaHeartbeat } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Upcoming Appointments", value: "3", icon: <FaCalendarCheck />, color: "from-rose-500 to-rose-600" },
    { title: "My Doctors", value: "2", icon: <FaUserMd />, color: "from-pink-500 to-pink-600" },
    { title: "Medical Records", value: "8", icon: <FaFileMedical />, color: "from-purple-500 to-purple-600" },
    { title: "Health Score", value: "85%", icon: <FaHeartbeat />, color: "from-red-500 to-red-600" },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Emily Smith", specialty: "Cardiology", date: "2025-11-18", time: "10:00 AM", type: "Consultation" },
    { id: 2, doctor: "Dr. Michael Johnson", specialty: "Neurology", date: "2025-11-20", time: "02:00 PM", type: "Follow-up" },
    { id: 3, doctor: "Dr. Sarah Brown", specialty: "Pediatrics", date: "2025-11-22", time: "11:00 AM", type: "Check-up" },
  ];

  const healthTips = [
    { title: "Stay Hydrated", description: "Drink at least 8 glasses of water daily", icon: "💧" },
    { title: "Regular Exercise", description: "30 minutes of physical activity daily", icon: "🏃" },
    { title: "Healthy Diet", description: "Include fruits and vegetables in meals", icon: "🥗" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here's your health overview</p>
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
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
          <div className="space-y-3">
            {upcomingAppointments.map((apt) => (
              <div key={apt.id} className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-800">{apt.doctor}</div>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-semibold">
                    {apt.type}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{apt.specialty}</div>
                <div className="text-sm text-gray-500 mt-1">{apt.date} • {apt.time}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
            View All Appointments
          </button>
        </div>

        {/* Health Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Tips</h2>
          <div className="space-y-4">
            {healthTips.map((tip, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">{tip.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{tip.title}</div>
                    <div className="text-sm text-gray-600">{tip.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
            More Health Tips
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
