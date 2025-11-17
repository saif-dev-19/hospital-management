import { useState } from "react";
import { FaCalendarPlus, FaUserMd, FaClock, FaCheckCircle } from "react-icons/fa";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: "",
    doctor: "",
    date: "",
    time: "",
    type: ""
  });

  const specialties = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"];
  const doctors = ["Dr. Emily Smith", "Dr. Michael Johnson", "Dr. Sarah Brown", "Dr. David Taylor"];
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const types = ["Consultation", "Follow-up", "Check-up", "Emergency"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Appointment</h1>
        <p className="text-gray-600">Schedule your visit with our doctors</p>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white" : "bg-gray-200 text-gray-600"
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-24 h-1 mx-2 ${step > s ? "bg-rose-600" : "bg-gray-200"}`}></div>}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm font-semibold text-gray-600">Select Specialty</span>
          <span className="text-sm font-semibold text-gray-600">Choose Doctor</span>
          <span className="text-sm font-semibold text-gray-600">Pick Date & Time</span>
        </div>
      </div>

      {step === 4 ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Appointment Booked!</h2>
          <p className="text-gray-600 mb-6">Your appointment has been successfully scheduled</p>
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor:</span>
                <span className="font-semibold text-gray-800">{formData.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-800">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold text-gray-800">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-semibold text-gray-800">{formData.type}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setStep(1)}
            className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Specialty & Type</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Specialty</label>
                  <select
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition"
                  >
                    <option value="">Choose a specialty</option>
                    {specialties.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Appointment Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {types.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`py-3 px-4 rounded-xl font-semibold transition ${
                          formData.type === type
                            ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => formData.specialty && formData.type && setStep(2)}
                disabled={!formData.specialty || !formData.type}
                className="w-full mt-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Doctor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {doctors.map((doctor) => (
                  <button
                    key={doctor}
                    type="button"
                    onClick={() => setFormData({ ...formData, doctor })}
                    className={`p-6 rounded-xl text-left transition ${
                      formData.doctor === doctor
                        ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <FaUserMd className="text-3xl mb-2" />
                    <div className="font-bold text-lg">{doctor}</div>
                    <div className={formData.doctor === doctor ? "text-rose-100" : "text-gray-600"}>
                      {formData.specialty}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => formData.doctor && setStep(3)}
                  disabled={!formData.doctor}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Date & Time</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                  <div className="grid grid-cols-3 gap-3">
                    {times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`py-3 px-4 rounded-xl font-semibold transition ${
                          formData.time === time
                            ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.date || !formData.time}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
