import React from 'react';
import '../css/RecomendedAlbums.css';

interface RecommendedAlbumsProps {
  user: {
    profileImage: string;
  };
  albums: { image: string; name: string }[];
}

const RecommendedAlbums: React.FC<RecommendedAlbumsProps> = ({ user, albums }) => {
  return (
    <section className="recommended-albums">
      <div className="user-info">
        <img src={user.profileImage} alt="User" className="user-image" />
        <div className="user-details">
          <p className="section-title">Recommended Albums</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-button prev-button">❮</button>
        <button className="carousel-button next-button">❯</button>
      </div>
      <div className="albums">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <img src={album.image} alt={album.name} className="album-image" />
            <p className="album-name">{album.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedAlbums;
