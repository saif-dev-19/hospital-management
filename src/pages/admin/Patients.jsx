import { FaUsers, FaPlus, FaSearch, FaPhone, FaEnvelope } from "react-icons/fa";

const Patients = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 45, gender: "Male", phone: "+1 234 567 8900", email: "john@example.com", lastVisit: "2025-11-15", condition: "Hypertension", status: "Active" },
    { id: 2, name: "Jane Smith", age: 32, gender: "Female", phone: "+1 234 567 8901", email: "jane@example.com", lastVisit: "2025-11-14", condition: "Diabetes", status: "Active" },
    { id: 3, name: "Mike Wilson", age: 28, gender: "Male", phone: "+1 234 567 8902", email: "mike@example.com", lastVisit: "2025-11-10", condition: "Asthma", status: "Active" },
    { id: 4, name: "Sarah Davis", age: 55, gender: "Female", phone: "+1 234 567 8903", email: "sarah@example.com", lastVisit: "2025-11-08", condition: "Arthritis", status: "Inactive" },
    { id: 5, name: "Robert Brown", age: 38, gender: "Male", phone: "+1 234 567 8904", email: "robert@example.com", lastVisit: "2025-11-12", condition: "Migraine", status: "Active" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Patients Management</h1>
          <p className="text-gray-600">View and manage all registered patients</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
          <FaPlus />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients by name, email, or phone..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Patient</th>
                <th className="px-6 py-4 text-left font-semibold">Age/Gender</th>
                <th className="px-6 py-4 text-left font-semibold">Contact</th>
                <th className="px-6 py-4 text-left font-semibold">Last Visit</th>
                <th className="px-6 py-4 text-left font-semibold">Condition</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-purple-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{patient.name}</div>
                        <div className="text-sm text-gray-500">ID: #{patient.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-800">{patient.age} years</div>
                    <div className="text-sm text-gray-500">{patient.gender}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <FaPhone className="text-purple-500" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaEnvelope className="text-purple-500" />
                      <span>{patient.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800">{patient.lastVisit}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      patient.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition">
                        View
                      </button>
                      <button className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
