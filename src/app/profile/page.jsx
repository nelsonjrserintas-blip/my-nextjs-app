"use client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

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
          textAlign: "center",
          borderRadius: "12px",
          border: "2px solid #14785a",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#14785a" }}>Profile</h1>

        <img
          src="/profile_pic.png"
          alt="Profile"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            border: "4px solid #14785a",
            objectFit: "cover",
          }}
        />

        <button
          onClick={() => router.back()}
          style={{
            display: "block",
            width: "100%",
            marginTop: "24px",
            padding: "10px",
            background: "#14785a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}