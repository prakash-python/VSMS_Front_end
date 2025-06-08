import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate('/student-login');
  };

  const handleStaffLogin = () => {
    navigate('/staff-login');
  };

  return (
    <div>
      <h1>Welcome to Vcube Student Management System </h1>
      <button onClick={handleStudentLogin}>Student Login</button>
      <button onClick={handleStaffLogin}>Staff Login</button>
    </div>
  );
}

export default Dashboard;