import { FaBell, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

const Notifications = () => {
  const notifications = [
    { id: 1, type: "success", title: "New Appointment Booked", message: "John Doe has booked an appointment with Dr. Smith", time: "5 minutes ago", read: false },
    { id: 2, type: "warning", title: "Payment Overdue", message: "Invoice INV-004 is overdue by 3 days", time: "1 hour ago", read: false },
    { id: 3, type: "info", title: "New Doctor Registered", message: "Dr. James Wilson has joined the hospital", time: "2 hours ago", read: true },
    { id: 4, type: "success", title: "Payment Received", message: "Payment of $450 received from Jane Smith", time: "3 hours ago", read: true },
    { id: 5, type: "warning", title: "Low Stock Alert", message: "Medical supplies running low in inventory", time: "5 hours ago", read: false },
    { id: 6, type: "info", title: "System Update", message: "System maintenance scheduled for tonight", time: "1 day ago", read: true },
  ];

  const getIcon = (type) => {
    switch(type) {
      case "success": return <FaCheckCircle className="text-green-500" />;
      case "warning": return <FaExclamationCircle className="text-yellow-500" />;
      case "info": return <FaInfoCircle className="text-blue-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with all system activities</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
          Mark All as Read
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md">
          All
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
          Unread
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
          Success
        </button>
        <button className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
          Warnings
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-0.5 transition ${
              !notif.read ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl mt-1">{getIcon(notif.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{notif.title}</h3>
                  <span className="text-sm text-gray-500">{notif.time}</span>
                </div>
                <p className="text-gray-600 mb-3">{notif.message}</p>
                <div className="flex space-x-2">
                  {!notif.read && (
                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 transition">
                      Mark as Read
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
