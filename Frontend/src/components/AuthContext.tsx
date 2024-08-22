import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  username: string;
  setUsername: (username: string) => void;
  isAuthenticated: boolean;
  login: (username: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>("");
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = (username: string, token: string) => {
    // set username
    setUsername(username);
    //set authentication
    setAuthenticated(true);
    //add token
    localStorage.setItem("authToken", token); // Save the token to local storage
    //to check
    // console.log('authToken saved:', localStorage.getItem('authToken'));
  };

  const logout = () => {
    setUsername("");
    setAuthenticated(false);
    // remove token
    localStorage.removeItem("authToken");
    //check token
    // console.log('authToken removed:', localStorage.getItem('authToken'));
  };

  return (
    <AuthContext.Provider
      value={{ username, setUsername, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
