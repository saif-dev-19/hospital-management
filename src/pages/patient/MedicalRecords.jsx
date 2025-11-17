import { FaFileMedical, FaSearch, FaDownload } from "react-icons/fa";

const MedicalRecords = () => {
  const records = [
    { id: 1, type: "Lab Report", doctor: "Dr. Emily Smith", date: "2025-11-15", diagnosis: "Blood Test - Normal", status: "Completed" },
    { id: 2, type: "Prescription", doctor: "Dr. Michael Johnson", date: "2025-11-10", diagnosis: "Migraine Treatment", status: "Active" },
    { id: 3, type: "X-Ray", doctor: "Dr. Sarah Brown", date: "2025-11-05", diagnosis: "Chest X-Ray - Clear", status: "Completed" },
    { id: 4, type: "Consultation Notes", doctor: "Dr. David Taylor", date: "2025-10-28", diagnosis: "Routine Check-up", status: "Completed" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Medical Records</h1>
        <p className="text-gray-600">Access your medical history and documents</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition">
            <option>All Types</option>
            <option>Lab Report</option>
            <option>Prescription</option>
            <option>X-Ray</option>
            <option>Consultation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {records.map((record) => (
          <div key={record.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                <FaFileMedical className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{record.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    record.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}>
                    {record.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{record.diagnosis}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Doctor</span>
                <span className="font-semibold text-gray-800">{record.doctor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-800">{record.date}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                View Details
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <FaDownload />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;
