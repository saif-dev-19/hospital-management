import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧑‍💼 Admin Dashboard</h1>
      <p>Welcome Admin! Here you can manage doctors, patients & appointments.</p>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
