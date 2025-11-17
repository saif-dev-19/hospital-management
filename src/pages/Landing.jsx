import { useNavigate } from "react-router-dom";
import { FaHospital, FaUserMd, FaCalendarCheck, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUserMd className="text-4xl text-blue-500" />,
      title: "Expert Doctors",
      description: "Access to qualified healthcare professionals 24/7"
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-green-500" />,
      title: "Easy Appointments",
      description: "Book and manage appointments with just a few clicks"
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      title: "Health Analytics",
      description: "Track your health records and medical history"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "Secure & Private",
      description: "Your data is encrypted and completely secure"
    },
    {
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your needs"
    },
    {
      icon: <FaHospital className="text-4xl text-indigo-500" />,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FaHospital className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealSync+
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-black via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Healthcare Made
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">
              Simple & Smart
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experience the future of healthcare management with our comprehensive platform.
            Connect with doctors, manage appointments, and track your health journey seamlessly.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Cards Animation */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-black p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition animate-float">
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Expert Doctors</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition animate-float" style={{animationDelay: '0.2s'}}>
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-purple-100">Happy Patients</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition animate-float" style={{animationDelay: '0.4s'}}>
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-pink-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose HealSync+
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for modern healthcare management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of satisfied users and start your journey today
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaHospital className="text-3xl text-blue-400" />
            <span className="text-2xl font-bold">HealSync+</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 HealSync+. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;
