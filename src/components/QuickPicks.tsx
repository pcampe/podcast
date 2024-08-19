import React from 'react';
import '../css/QuickPicks.css';

interface Song {
  albumImage: string;
  artistName: string;
  songTitle: string;
}

interface QuickPicksProps {
  userImage: string;
  songs: Song[];
}

const QuickPicks: React.FC<QuickPicksProps> = ({ userImage, songs }) => {
  return (
    <section className="quick-picks">
      <div className="quick-picks-header">
        <div className="user-info">
          <img src={userImage} alt="User" className="user-logo" />
          <div className="header-text">
            <h2>Start Radio From a Song</h2>
            <h3>Quick Picks</h3>
          </div>
        </div>
        <div className="play-all">
          <button className="play-all-button">Play All</button>
        <div className="carousel-controls">
          <button className="carousel-button prev-button">❮</button>
          <button className="carousel-button next-button">❯</button>
        </div>
        </div>
      </div>
      <div className="quick-picks-list">
        {songs.map((song, index) => (
          <div key={index} className="quick-pick-item">
            <img src={song.albumImage} alt={song.songTitle} className="album-image" />
            <div className="song-info">
              <p className="song-title">{song.songTitle}</p>
              <p className="artist-name">{song.artistName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickPicks;
