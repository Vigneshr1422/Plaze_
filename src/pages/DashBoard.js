import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { clearUserData, getUserData } from '../services/Storage';
import { FaUserPlus, FaListAlt, FaFilePdf, FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    const token = getUserData();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded && decoded.email) {
          setUserData({ name: decoded.name || 'User', email: decoded.email });
          console.log("Fetched User Data:", decoded);
        } else {
          console.error("User data not found or incomplete.");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("No token found.");
    }
  }, []);

  const handleLogout = () => {
    clearUserData();
    navigate('/login');
  };

  return (
    <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 relative px-4 md:px-8 pt-16 sm:pt-24">
      {/* Profile Container */}
      <div className="profile-container bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Profile</h2>
        <p className="text-lg text-gray-600">{userData.name}</p>
        <p className="text-sm text-gray-500">{userData.email}</p>
      </div>

      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 animate-fadeInUp text-center">
        Welcome to the Placement Dashboard
      </h1>

      <div className="dashboard-actions grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-lg mx-auto">
        <Link to="/student-entry-form">
          <div className="container-card bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200 p-6 flex flex-col items-center space-y-4">
            <FaUserPlus className="text-4xl text-blue-500" />
            <button className="text-blue-500 font-bold text-lg">Add Student</button>
          </div>
        </Link>

        <Link to="/student-list">
          <div className="container-card bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200 p-6 flex flex-col items-center space-y-4">
            <FaListAlt className="text-4xl text-green-500" />
            <button className="text-green-500 font-bold text-lg">Students List</button>
          </div>
        </Link>

        <Link to="/pdf-generation">
          <div className="container-card bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200 p-6 flex flex-col items-center space-y-4">
            <FaFilePdf className="text-4xl text-purple-500" />
            <button className="text-purple-500 font-bold text-lg">Generate Report</button>
          </div>
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 flex items-center justify-center bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transform transition-all duration-200 hover:scale-105 space-x-2"
      >
        <FaSignOutAlt className="text-xl" />
        <span>Logout</span>
      </button>

      {/* Background elements for a modern look */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-bounce-slow delay-500"></div>
    </div>
  );
};

export default Dashboard;
