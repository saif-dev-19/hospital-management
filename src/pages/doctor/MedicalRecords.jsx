import { FaFileMedical, FaSearch, FaDownload } from "react-icons/fa";

const MedicalRecords = () => {
  const records = [
    { id: 1, patient: "John Doe", type: "Lab Report", date: "2025-11-15", diagnosis: "Hypertension", notes: "Blood pressure elevated" },
    { id: 2, patient: "Jane Smith", type: "Prescription", date: "2025-11-14", diagnosis: "Diabetes", notes: "Insulin dosage adjusted" },
    { id: 3, patient: "Mike Wilson", type: "X-Ray", date: "2025-11-10", diagnosis: "Asthma", notes: "Chest clear, no complications" },
    { id: 4, patient: "Sarah Davis", type: "MRI Scan", date: "2025-11-08", diagnosis: "Arthritis", notes: "Joint inflammation detected" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Medical Records</h1>
        <p className="text-gray-600">Access and manage patient medical records</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition">
            <option>All Types</option>
            <option>Lab Report</option>
            <option>Prescription</option>
            <option>X-Ray</option>
            <option>MRI Scan</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Record ID</th>
                <th className="px-6 py-4 text-left font-semibold">Patient</th>
                <th className="px-6 py-4 text-left font-semibold">Type</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Diagnosis</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-teal-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <FaFileMedical className="text-teal-500" />
                      <span className="font-semibold text-gray-800">REC-{record.id.toString().padStart(3, '0')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">{record.patient}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                      {record.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-800">{record.date}</td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-gray-800">{record.diagnosis}</div>
                      <div className="text-sm text-gray-600">{record.notes}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition">
                        View
                      </button>
                      <button className="p-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <FaDownload className="text-gray-600" />
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

export default MedicalRecords;
