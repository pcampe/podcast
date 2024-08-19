import React from 'react';
//import '../CSS/SongCard.css';

interface SongCardProps {
  song: {
    id: number;
    title: string;
    artist: string;
    cover: string;
  };
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card">
      <img src={song.cover} alt={song.title} className="song-cover" />
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
