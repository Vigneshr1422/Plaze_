// import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/DashBoard'; // Ensure this matches the correct casing
// import StudentEntryForm from './pages/StudentEntryForm'; // Import the StudentEntryForm
// import { clearUserData } from './services/Storage'; 
// import { isAuthenticated } from './services/Auth'; 
// import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

// const App = () => {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/" element={<h1>Home Page</h1>} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/dashboard" element={<ProtectedDashboard />} />
//             <Route path="/student-entry-form" element={<StudentEntryForm />} /> {/* Add this line */}
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </div>
//   );
// }

// function ProtectedDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     clearUserData(); 
//     navigate('/login'); 
//   };

//   if (!isAuthenticated()) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="dashboard-container">
//       <Dashboard />
//       <button className="logout-button" onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default App;



// // import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
// // import RegisterPage from './pages/RegisterPage';
// // import LoginPage from './pages/LoginPage';
// //  import Dashboard from './pages/Dashboard';
// // import StudentsList from './pages/StudentsList'; // Adjust the path as necessary
// // import { clearUserData } from './services/Storage'; 
// // import { isAuthenticated } from './services/Auth'; 

// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/register" element={<RegisterPage />} />
// //           <Route path="/" element={<h1>Home Page</h1>} />
// //           <Route path="/login" element={<LoginPage />} />
// //           <Route path="/dashboard" element={<ProtectedDashboard />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // function ProtectedDashboard() {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     clearUserData(); 
// //     navigate('/login'); 
// //   };

// //   if (!isAuthenticated()) {
// //     return <Navigate to="/login" />;
// //   }

// //   return (
// //     <div className="dashboard-container">
// //       <Dashboard />
// //       <button className="logout-button" onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // }

// // export default App;


// import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/DashBoard'; // Ensure this matches the correct casing
// import StudentEntryForm from './pages/StudentEntryForm'; // Import the StudentEntryForm
// import StudentList from './pages/StudentList'; // Import the StudentList component
// import { clearUserData } from './services/Storage'; 
// import { isAuthenticated } from './services/Auth'; 
// import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

// const App = () => {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/dashboard" element={<ProtectedDashboard />} />
//             <Route path="/student-entry-form" element={<StudentEntryForm />} /> {/* Add this line */}
//             <Route path="/student-list" element={<StudentList />} /> {/* Add route for StudentList */}
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </div>
//   );
// }

// function ProtectedDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     clearUserData(); 
//     navigate('/login'); 
//   };

//   if (!isAuthenticated()) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="dashboard-container">
//       <Dashboard />
//       <button className="logout-button" onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default App;

  // src/App.import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import Dashboard from './pages/DashBoard'; // Ensure this matches the correct casing
import StudentEntryForm from './pages/StudentEntryForm';
import StudentList from './pages/StudentList';
import Home from './pages/Home'; // Import the Home component
import PdfGenerator from './pages/PdfGenerator'; // Import your PdfGenerator component
import { clearUserData } from './services/Storage';
import { isAuthenticated } from './services/Auth';
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Adjust path if necessary
import HeaderFooter from './pages/HeaderFooter'; // Import the HeaderFooter component

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <HeaderFooter /> {/* Include Header and Footer */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Add the Home route */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
            <Route path="/student-entry-form" element={<StudentEntryForm />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/pdf-generation" element={<PdfGenerator />} /> {/* Add PDF generation route */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

function ProtectedDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserData(); 
    navigate('/login'); 
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <Dashboard />
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
