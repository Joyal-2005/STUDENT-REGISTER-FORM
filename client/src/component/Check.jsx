import React, { useState } from "react";

function check() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);
    
  const fetchStudent = async () => {
    const response = await fetch(`http://localhost:8080/api/students/${id}`);
    const data = await response.json();
    setStudent(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Status Checker</h1>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={fetchStudent}
        style={{
          marginLeft: "10px",
          padding: "8px 15px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Check Status
      </button>

      {student && (
        <div style={{ marginTop: "30px" }}>
          <h2>Student Details</h2>
          <p><b>ID:</b> {student.id}</p>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Status:</b> {student.status}</p>
          <p><b>Department:</b> {student.department}</p>
        </div>
      )}
    </div>
  );
}

export default check;
