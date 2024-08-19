import React from 'react';
import '../css/Header.css';

interface User {
  name: string;
  profileImage: string;
}

interface HeaderData {
  menuIcon: string;
  youtubeLogo: string;
}

interface HeaderProps {
  user: User;
  headerData: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ user, headerData }) => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={headerData.menuIcon} alt="Menu" className="menu-icon" />
        <img src={headerData.youtubeLogo} alt="YouTube Music" className="youtube-logo" />
      </div>
      
      <div className="center-section">
      <input type="text" placeholder="&#x1F50D; Search" className="search-bar" />


      </div>
      

      <div className="right-section">
        <img src={user.profileImage} alt={user.name} className="profile-image" />
      </div>
    </header>
  );
};

export default Header;
