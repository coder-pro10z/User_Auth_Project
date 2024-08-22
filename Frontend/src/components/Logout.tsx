import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Logout: React.FC = () => {
  const { logout } = useAuth(); // Get the logout function from context
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Log the user out
    navigate("/login"); // Redirect to the login page
  }, [logout, navigate]);

  return null; // No UI needed for logout, it just performs the action
};

export default Logout;
