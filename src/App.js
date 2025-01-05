
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
import StudentYearPage from './pages/StudentYearPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import PlacedStudentsPage from './pages/PlacedStudentsPage';
import ChartPage from './pages/ChartPage'; // New Chart Page
import { isAuthenticated } from './services/Auth'; // For auth check
import { AuthProvider } from './context/AuthContext'; // For auth context
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

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/student-entry-form" element={<ProtectedRoute><StudentEntryForm /></ProtectedRoute>} />
            <Route path="/student-list" element={<ProtectedRoute><StudentList /></ProtectedRoute>} />
            <Route path="/pdf-generation" element={<ProtectedRoute><PdfGenerator /></ProtectedRoute>} />
            <Route path="/student-year" element={<ProtectedRoute><StudentYearPage /></ProtectedRoute>} />
            <Route path="/placed-students" element={<ProtectedRoute><PlacedStudentsPage /></ProtectedRoute>} />
            <Route path="/company" element={<ProtectedRoute><CompanyDetailsPage /></ProtectedRoute>} />
            <Route path="/chart" element={<ProtectedRoute><ChartPage /></ProtectedRoute>} /> {/* Add Chart Page */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />; // Redirect to login page if not authenticated
  }
  return children;
}

export default App;
