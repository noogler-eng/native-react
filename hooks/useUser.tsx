import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UseUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseUser must be used within a UserProvider");
  }

  return context;
}
