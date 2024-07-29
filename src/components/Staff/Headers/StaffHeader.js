import React, { useState } from 'react';
import './StaffHeader.css'; // Ensure you create this file for styling
// Import the ProfileModal component
import ProfileIcon  from '../ProfileIcon/ProfileIcon'; // Import the custom ProfileIcon component

const StaffHeader = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="staffheader">
        <button className="menu-icon" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
        </button>
        <h1 className="staffheader-title">Staff Portal</h1>
        <ProfileIcon onClick={handleProfileClick} /> {/* Custom ProfileIcon component */}
      </header>
    </>
  );
};

export default StaffHeader;