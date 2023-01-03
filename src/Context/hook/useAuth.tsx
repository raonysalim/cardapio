import axios from "axios";
import { useEffect, useState } from "react";
export default function useAuth() {
  const [auth, setAuth] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuth(true);
    }
  }, []);
  async function handleLogin({ user, password }) {
    try {
      const res = await axios.post("http://localhost:3000/admin/login", {
        user,
        password,
      });
      setAuth(true);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      return true;
    } catch {
      return false;
    }
  }
  function handleLogout() {
    localStorage.clear();
    setAuth(false);
  }
  return { auth, handleLogin, handleLogout };
}
