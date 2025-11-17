import { FaDollarSign, FaFileInvoice, FaDownload, FaSearch } from "react-icons/fa";

const Billing = () => {
  const invoices = [
    { id: "INV-001", patient: "John Doe", amount: 450, date: "2025-11-15", service: "Consultation", status: "Paid" },
    { id: "INV-002", patient: "Jane Smith", amount: 1200, date: "2025-11-14", service: "Surgery", status: "Pending" },
    { id: "INV-003", patient: "Mike Wilson", amount: 300, date: "2025-11-13", service: "Check-up", status: "Paid" },
    { id: "INV-004", patient: "Sarah Davis", amount: 850, date: "2025-11-12", service: "Therapy", status: "Overdue" },
    { id: "INV-005", patient: "Robert Brown", amount: 600, date: "2025-11-10", service: "Lab Tests", status: "Paid" },
  ];

  const stats = [
    { title: "Total Revenue", value: "$45,200", color: "from-green-500 to-green-600" },
    { title: "Pending Payments", value: "$8,450", color: "from-yellow-500 to-yellow-600" },
    { title: "Overdue", value: "$2,100", color: "from-red-500 to-red-600" },
    { title: "This Month", value: "$12,800", color: "from-blue-500 to-blue-600" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Billing & Payments</h1>
        <p className="text-gray-600">Manage invoices and track payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg text-white`}>
            <FaDollarSign className="text-3xl mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-white/80">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Invoice ID</th>
                <th className="px-6 py-4 text-left font-semibold">Patient</th>
                <th className="px-6 py-4 text-left font-semibold">Service</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Amount</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-green-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <FaFileInvoice className="text-green-500" />
                      <span className="font-semibold text-gray-800">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800">{invoice.patient}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {invoice.service}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-800">{invoice.date}</td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-bold text-gray-800">${invoice.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      invoice.status === "Paid" ? "bg-green-100 text-green-700" :
                      invoice.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition">
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

export default Billing;
