import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaEdit } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
              JD
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">John Doe</h2>
            <p className="text-gray-600 mb-4">Patient ID: #12345</p>
            <button className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition">
              <FaEdit className="inline mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <FaUser className="text-rose-500" />
                <span className="text-gray-800">John Doe</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <FaEnvelope className="text-rose-500" />
                <span className="text-gray-800">john.doe@example.com</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <FaPhone className="text-rose-500" />
                <span className="text-gray-800">+1 234 567 8900</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <FaCalendar className="text-rose-500" />
                <span className="text-gray-800">January 15, 1980</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <FaMapMarkerAlt className="text-rose-500" />
                <span className="text-gray-800">123 Main Street, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Medical Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Type</label>
            <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <span className="text-gray-800 font-semibold">O+</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
            <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <span className="text-gray-800 font-semibold">5'10" (178 cm)</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>
            <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <span className="text-gray-800 font-semibold">165 lbs (75 kg)</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Allergies</label>
            <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <span className="text-gray-800">Penicillin, Peanuts</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Medications</label>
            <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <span className="text-gray-800">Lisinopril 10mg (Daily), Metformin 500mg (Twice daily)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
