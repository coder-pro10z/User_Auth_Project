import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar /> {/* NavBar at the top, full width */}
        <div className="flex flex-grow">
          <SideBar /> {/* SideBar on the left */}
          {/* <main className="flex-grow p-4 overflow-y-auto">
           */}
          <main className="flex-grow ml-64 mt-16 p-4 overflow-y-auto">

            {/* Main content area, taking up remaining space */}
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<h1>About Page</h1>} />
              <Route path="/contact" element={<h1>Contact Page</h1>} />
              <Route path="/profile" element={<h1>Profile Page</h1>} />
              <Route path="/settings" element={<h1>Settings Page</h1>} />
              <Route path="/logout" element={<h1>Logout Page</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
