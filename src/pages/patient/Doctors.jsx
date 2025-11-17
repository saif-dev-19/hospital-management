import { FaUserMd, FaSearch, FaStar } from "react-icons/fa";

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Emily Smith", specialty: "Cardiology", experience: "15 years", rating: 4.9, patients: 145, available: true },
    { id: 2, name: "Dr. Michael Johnson", specialty: "Neurology", experience: "12 years", rating: 4.8, patients: 132, available: true },
    { id: 3, name: "Dr. Sarah Brown", specialty: "Pediatrics", experience: "10 years", rating: 4.9, patients: 128, available: false },
    { id: 4, name: "Dr. David Taylor", specialty: "Orthopedics", experience: "18 years", rating: 4.7, patients: 119, available: true },
    { id: 5, name: "Dr. Lisa Anderson", specialty: "Dermatology", experience: "8 years", rating: 4.8, patients: 98, available: true },
    { id: 6, name: "Dr. James Wilson", specialty: "Psychiatry", experience: "14 years", rating: 4.6, patients: 87, available: false },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Find Doctors</h1>
        <p className="text-gray-600">Browse and connect with our expert doctors</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition"
            />
          </div>
          <select className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition">
            <option>All Specialties</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                  {doctor.name.split(' ')[1][0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-rose-100">{doctor.specialty}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-semibold text-gray-800">{doctor.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Patients</span>
                  <span className="font-semibold text-gray-800">{doctor.patients}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-gray-800">{doctor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    doctor.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {doctor.available ? "Available" : "Busy"}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  Book Appointment
                </button>
                <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
