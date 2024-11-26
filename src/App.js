import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import StudentEntryForm from './pages/StudentEntryForm';
import StudentList from './pages/StudentList';
import Home from './pages/Home';
import Services from './pages/Services'; // Import the new Services page
import About from './pages/About'; // Import About page
import Contact from './pages/Contact';
import PdfGenerator from './pages/PdfGenerator';
import { isAuthenticated } from './services/Auth';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import HeaderFooter from './pages/HeaderFooter';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <HeaderFooter />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Add contact route */}
            <Route path="/dashboard" element={<ProtectedDashboard />} />
            <Route path="/student-entry-form" element={<StudentEntryForm />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/pdf-generation" element={<PdfGenerator />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

function ProtectedDashboard() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;  // Redirect if not authenticated
  }

  return (
    <div className="dashboard-container">
      <Dashboard />
    </div>
  );
}

export default App;


// import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';

// import Dashboard from './pages/DashBoard';
// import StudentEntryForm from './pages/StudentEntryForm';
// import StudentList from './pages/StudentList';
// import Home from './pages/Home';
// import Services from './pages/Services'; // Import the new Services page
// import About from './pages/About'; // Import About page
// import Contact from './pages/Contact'
// import PdfGenerator from './pages/PdfGenerator';
// import { clearUserData } from './services/Storage';
// import { isAuthenticated } from './services/Auth';
// import { AuthProvider } from './context/AuthContext';
// import './index.css';
// import HeaderFooter from './pages/HeaderFooter';

// const App = () => {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <BrowserRouter>
//           <HeaderFooter />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} /> {/* Add contact route */}
//             <Route path="/dashboard" element={<ProtectedDashboard />} />
//             <Route path="/student-entry-form" element={<StudentEntryForm />} />
//             <Route path="/student-list" element={<StudentList />} />
//             <Route path="/pdf-generation" element={<PdfGenerator />} />
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </div>
//   );
// };

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
