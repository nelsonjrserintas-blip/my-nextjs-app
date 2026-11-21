"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "12345";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (username === "" || password === "") {
      setError("Please fill in all fields.");
    } else if (username !== VALID_USERNAME) {
      setError("Wrong username.");
    } else if (password !== VALID_PASSWORD) {
      setError("Wrong password.");
    } else {
      setError("");
      router.push("/profile");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #14785a, #2f9e6f)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          color: "#222",
          padding: "32px",
          width: "340px",
          borderRadius: "12px",
          border: "2px solid #14785a",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#14785a" }}>
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <label style={{ display: "block", marginBottom: "16px", fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          Show Password
        </label>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#14785a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {error && (
          <p
            style={{
              marginTop: "16px",
              padding: "8px",
              background: "#ffe5e5",
              border: "1px solid #d93025",
              borderRadius: "6px",
              color: "#d93025",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  border: "1px solid #999",
  borderRadius: "6px",
  fontSize: "15px",
  background: "#fff",
  color: "#222",
  boxSizing: "border-box",
};