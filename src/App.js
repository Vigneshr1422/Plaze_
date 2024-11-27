

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import StudentEntryForm from './pages/StudentEntryForm';
import StudentList from './pages/StudentList';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PdfGenerator from './pages/PdfGenerator';
import StudentYearPage from './pages/StudentYearPage'; // New
import CompanyDetailsPage from './pages/CompanyDetailsPage'; // New
import PlacedStudentsPage from './pages/PlacedStudentsPage'; // Import your new component
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
            <Route path="/student-entry-form" element={<StudentEntryForm />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/pdf-generation" element={<PdfGenerator />} />
            <Route path="/student-year" element={<StudentYearPage />} />
            <Route path="/placed-students" element={<PlacedStudentsPage />} />  {/* Fixed route */}
            <Route path="/company" element={<CompanyDetailsPage />} />
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

  return <Dashboard />;
}

export default App;
