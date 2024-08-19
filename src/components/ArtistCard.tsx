import React from 'react';
//import '../CSS/ArtistCard.css';

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    image: string;
  };
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h3>{artist.name}</h3>
    </div>
  );
};

export default ArtistCard;
