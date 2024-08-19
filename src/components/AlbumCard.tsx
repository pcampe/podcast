import React from 'react';
//import '../CSS/AlbumCard.css';

interface AlbumCardProps {
  album: {
    id: number;
    title: string;
    artist: string;
    cover: string;
  };
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <div className="album-info">
        <h3>{album.title}</h3>
        <p>{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
