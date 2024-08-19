import React from 'react';
import '../css/SimilarArtists.css';

interface Artist {
  name: string;
  image: string;
}

interface SimilarArtistsProps {
  artistName: string;
  similarArtists: Artist[];
  user: {
    profileImage: string;
  };
}

const SimilarArtists: React.FC<SimilarArtistsProps> = ({ artistName, similarArtists, user }) => {
  return (
    <section className="similar-artists">
      <div className="user-info">
        <img src={user.profileImage} alt="User Profile" className="user-image" />
        <div className="user-details">
          <p className="section-title">Similar to {artistName}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-button prev-button">❮</button>
        <button className="carousel-button next-button">❯</button>
      </div>
      <div className="artists-list">
        {similarArtists.map((artist, index) => (
          <div key={index} className="artist-card">
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarArtists;
