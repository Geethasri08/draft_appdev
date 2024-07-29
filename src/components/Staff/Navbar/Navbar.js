
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you create this file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="menu-icon">
        <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link></li>
          <li><Link to="/schedule" onClick={handleLinkClick}>View Schedule</Link></li>
          <li><Link to="/time-off-requests" onClick={handleLinkClick}>Requests</Link></li>
          <li><Link to="/calendar" onClick={handleLinkClick}>Upcoming Shifts</Link></li>
          <li><Link to="/projectsubmit" onClick={handleLinkClick}>Reports</Link></li>
          <li><Link to="/settings" onClick={handleLinkClick}>Settings</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
