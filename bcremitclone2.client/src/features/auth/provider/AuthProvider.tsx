/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { AuthContext } from 'features/auth/context/AuthContext';
import type { AccountInfo } from 'types/form'
import api from 'api/axios';
import { jwtDecode } from "jwt-decode";
import type { AuthUser } from 'types/user';

interface JwtPayload {
  sub: string;
  email: string;
};
function AuthProvider ({ children }: {children: React.ReactNode}) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = async (data: AccountInfo) => {
    const response = await api.post("user/login", data);
    const token = response.data.token;

    localStorage.setItem("token", token);

    const decoded = jwtDecode<JwtPayload>(token);

    setUser({
      id: decoded.sub,
      email: decoded.email,
    });
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = jwtDecode<JwtPayload>(token);

    setUser({
      id: decoded.sub,
      email: decoded.email,
    });
    
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;