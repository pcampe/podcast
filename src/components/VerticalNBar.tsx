import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../data/data';
import '../css/VerticalNbar.css';

interface Playlist {
  title: string;
  description: string;
  image: string;
}

interface VerticalNBarProps {
  newPlaylists: Playlist[];
}

const VerticalNBar: React.FC<VerticalNBarProps> = ({ newPlaylists }) => {
  const navigate = useNavigate();

  const handleNewPlaylistClick = () => {
    navigate('/create-playlist');
  };

  return (
    <div className="vertical-n-bar">
      <div className="home-icon-container">
        <a href="/">
          <img src={icons.home} alt="Home" className="home-icon" />
        </a>
        <a href='/'><span className="home-text">Home</span></a> 
      </div>
      <button className="new-playlist-button" onClick={handleNewPlaylistClick}>
        <img src={icons.newPlaylist} alt="New Playlist" className="new-playlist-icon" />
        Nueva Playlist
      </button>
      <div className="playlist-list">
        {newPlaylists.length > 0 ? (
          newPlaylists.map((playlist, index) => (
            <div key={index} className="playlist-item">
              <img src={playlist.image} alt={playlist.title} className="playlist-thumbnail" />
              <div>
                <h4>{playlist.title}</h4>
                <p>{playlist.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-playlists">No playlists available</p>
        )}
      </div>
    </div>
  );
};

export default VerticalNBar;
