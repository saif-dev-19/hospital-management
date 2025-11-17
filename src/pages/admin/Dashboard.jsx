import { FaUserMd, FaUsers, FaCalendarCheck, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Total Doctors", value: "156", change: "+12%", icon: <FaUserMd />, color: "from-blue-500 to-blue-600", up: true },
    { title: "Total Patients", value: "2,847", change: "+8%", icon: <FaUsers />, color: "from-purple-500 to-purple-600", up: true },
    { title: "Appointments", value: "342", change: "-3%", icon: <FaCalendarCheck />, color: "from-pink-500 to-pink-600", up: false },
    { title: "Revenue", value: "$45.2K", change: "+15%", icon: <FaDollarSign />, color: "from-green-500 to-green-600", up: true },
  ];

  const recentAppointments = [
    { id: 1, patient: "John Doe", doctor: "Dr. Smith", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", doctor: "Dr. Johnson", time: "11:30 AM", status: "Pending" },
    { id: 3, patient: "Mike Wilson", doctor: "Dr. Brown", time: "02:00 PM", status: "Confirmed" },
    { id: 4, patient: "Sarah Davis", doctor: "Dr. Taylor", time: "03:30 PM", status: "Cancelled" },
  ];

  const topDoctors = [
    { name: "Dr. Emily Smith", specialty: "Cardiology", patients: 145, rating: 4.9 },
    { name: "Dr. Michael Johnson", specialty: "Neurology", patients: 132, rating: 4.8 },
    { name: "Dr. Sarah Brown", specialty: "Pediatrics", patients: 128, rating: 4.9 },
    { name: "Dr. David Taylor", specialty: "Orthopedics", patients: 119, rating: 4.7 },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition text-white`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl opacity-80">{stat.icon}</div>
              <div className={`flex items-center space-x-1 text-sm font-semibold ${stat.up ? 'bg-white/20' : 'bg-black/20'} px-3 py-1 rounded-full`}>
                {stat.up ? <FaArrowUp /> : <FaArrowDown />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-white/80 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Appointments</h2>
          <div className="space-y-3">
            {recentAppointments.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition">
                <div>
                  <div className="font-semibold text-gray-800">{apt.patient}</div>
                  <div className="text-sm text-gray-600">{apt.doctor} • {apt.time}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  apt.status === "Confirmed" ? "bg-green-100 text-green-700" :
                  apt.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Doctors */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Performing Doctors</h2>
          <div className="space-y-3">
            {topDoctors.map((doctor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {doctor.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{doctor.name}</div>
                    <div className="text-sm text-gray-600">{doctor.specialty}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">{doctor.patients} patients</div>
                  <div className="text-sm text-yellow-600">★ {doctor.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
