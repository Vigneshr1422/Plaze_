// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Welcome to the Placement Dashboard</h1>
//       <div className="dashboard-actions">
//         <Link to="/student-entry-form">
//           <button className="btn">Add Student</button>
//         </Link>
//         <Link to="/student-list">
//           <button className="btn">Students List</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import { Link, useNavigate } from 'react-router-dom';
// import { clearUserData } from '../services/Storage'; // Adjust the import path as necessary

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Logout handler
//   const handleLogout = () => {
//     clearUserData(); // Clear user data from storage
//     navigate('/login'); // Navigate to the login page
//   };

//   return (
//     <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Placement Dashboard</h1>
//       <div className="dashboard-actions flex flex-col space-y-4">
//         <Link to="/student-entry-form">
//           <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200">
//             Add Student
//           </button>
//         </Link>
//         <Link to="/student-list">
//           <button className="btn bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-200">
//             Students List
//           </button>
//         </Link>
//         {/* Button to navigate to PDF Generation page */}
//         <Link to="/pdf-generation">
//           <button className="btn bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 transition duration-200">
//             Generate PDF
//           </button>
//         </Link>
//       </div>
//       {/* Logout Button */}
//       <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-200"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// // export default Dashboard;
// og code

import { Link, useNavigate } from 'react-router-dom';
import { clearUserData } from '../services/Storage'; // Adjust the import path as necessary
import { FaUserPlus, FaListAlt, FaFilePdf, FaSignOutAlt } from 'react-icons/fa'; // Icons for buttons

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    clearUserData(); // Clear user data from storage
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-200">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 animate-fadeInUp">
        Welcome to the Placement Dashboard
      </h1>
      
      <div className="dashboard-actions grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-md mx-auto">
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
            <button className="text-purple-500 font-bold text-lg">Generate PDF</button>
          </div>
        </Link>
      </div>

      {/* Logout Button */}
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
