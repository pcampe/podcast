import React from 'react';
import '../css/ListenAgain.css';

interface User {
  name: string;
  profileImage: string;
}

interface ListenAgainProps {
  user: User;
  playlists: { image: string; name: string }[];
}

const ListenAgain: React.FC<ListenAgainProps> = ({ user, playlists }) => {
  return (
    <section className="listen-again">
      <div className="user-info">
        <img src={user.profileImage} alt={user.name} className="user-image" />
        <div className="user-details">
          <p className="section-title">Listen Again</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-button prev-button">❮</button>
        <button className="carousel-button next-button">❯</button>
      </div>
      <div className="playlists">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-card">
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <p className="playlist-name">{playlist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListenAgain;
