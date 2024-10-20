
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import { clearUserData } from './services/Storage'; 
import { isAuthenticated } from './services/Auth'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

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
    <div>
      <Dashboard />
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
}

export default App;
