import React, { useState } from 'react';
import StaffHeader from '../Headers/StaffHeader';
import './Home.css'; // Ensure you create this file for styling
import Sidebar from '../Navbar/Navbar';


const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`home-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <StaffHeader toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
      </main>
    </div>
  );
};

export default Home;