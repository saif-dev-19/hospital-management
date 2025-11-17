import { FaBell, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

const Notifications = () => {
  const notifications = [
    { id: 1, type: "success", title: "Appointment Confirmed", message: "Your appointment with Dr. Emily Smith is confirmed", time: "1 hour ago", read: false },
    { id: 2, type: "warning", title: "Upcoming Appointment", message: "You have an appointment tomorrow at 10:00 AM", time: "3 hours ago", read: false },
    { id: 3, type: "info", title: "Lab Results Available", message: "Your recent lab test results are now available", time: "1 day ago", read: true },
    { id: 4, type: "success", title: "Prescription Renewed", message: "Your prescription has been renewed successfully", time: "2 days ago", read: true },
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your health activities</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
          Mark All as Read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-0.5 transition ${
              !notif.read ? "border-l-4 border-rose-500" : ""
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
                    <button className="px-4 py-2 bg-rose-100 text-rose-700 rounded-lg text-sm font-semibold hover:bg-rose-200 transition">
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
