import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Layout from './components/Layout';
import RegisterPage from './pages/Register';
function App() {
  return (
    <Router>

      <Layout>  
        {/* Main content area, taking up remaining space */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
          <Route path="/logout" element={<h1>Logout Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>

    </Router>
  );
}

export default App;
