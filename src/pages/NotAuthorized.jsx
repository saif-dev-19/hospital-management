import React from "react";

const NotAuthorized = () => (
  <div style={{ textAlign: "center", marginTop: "5rem" }}>
    <h2>🚫 Access Denied</h2>
    <p>You are not authorized to view this page.</p>
    <a href="/">Go to Login</a>
  </div>
);

export default NotAuthorized;
