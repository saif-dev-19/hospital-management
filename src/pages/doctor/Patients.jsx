import { FaUsers, FaSearch } from "react-icons/fa";

const Patients = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 45, condition: "Hypertension", lastVisit: "2025-11-15", status: "Stable", visits: 12 },
    { id: 2, name: "Jane Smith", age: 32, condition: "Diabetes", lastVisit: "2025-11-14", status: "Monitoring", visits: 8 },
    { id: 3, name: "Mike Wilson", age: 28, condition: "Asthma", lastVisit: "2025-11-10", status: "Stable", visits: 5 },
    { id: 4, name: "Sarah Davis", age: 55, condition: "Arthritis", lastVisit: "2025-11-08", status: "Critical", visits: 15 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Patients</h1>
        <p className="text-gray-600">View and manage your patient list</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{patient.name}</h3>
                <p className="text-gray-600">{patient.age} years old</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                patient.status === "Stable" ? "bg-green-100 text-green-700" :
                patient.status === "Monitoring" ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"
              }`}>
                {patient.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Condition</span>
                <span className="font-semibold text-gray-800">{patient.condition}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last Visit</span>
                <span className="font-semibold text-gray-800">{patient.lastVisit}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Visits</span>
                <span className="font-semibold text-gray-800">{patient.visits}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                View Records
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
