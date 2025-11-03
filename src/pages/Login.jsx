import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setRole, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${username}&password=${password}`
      );

      if (res.data.length > 0) {
        const user = res.data[0];
        setRole(user.role);
        setUser(user);
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", JSON.stringify(user));
        navigate(`/${user.role}-dashboard`);
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Server error!",err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>🔐 Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: "0.5rem" }}
      /><br />
      <button onClick={handleLogin} style={{ marginTop: "1rem" }}>
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
