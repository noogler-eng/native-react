import { createContext, useState } from "react";

export const UserContext = createContext<any>({});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string }>({ email: "" });

  async function login(email: string, password: string) {
    try {
      console.log("Logging in with", email);
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  async function register(email: string, password: string) {
    try {
      console.log("Registering with", email);
    } catch (error) {
      console.error("Registration failed", error);
    }
  }

  async function logout() {
    try {
      console.log("Logging out");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  // provind full object
  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
