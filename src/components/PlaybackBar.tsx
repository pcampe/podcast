import React from 'react';
import previousIcon from '../assets/images/atras.png';
import playIcon from '../assets/images/play.png';
import nextIcon from '../assets/images/siguiente.png';
import likeIcon from '../assets/images/like.png';
import dislikeIcon from '../assets/images/dislike.png';
import shuffleIcon from '../assets/images/repetir.png';
import volumeIcon from '../assets/images/altavoz.png';
import '../css/PlayBackBar.css';

interface PlaybackBarProps {
  albumImage: string;
  artistName: string;
  songTitle: string;
}

const PlaybackBar: React.FC<PlaybackBarProps> = ({ albumImage, artistName, songTitle }) => {
  return (
    <div className="playback-bar">
      <div className="controls">
        <button className="control-button">
          <img src={previousIcon} alt="Previous" className="control-icon" />
        </button>
        <button className="control-button">
          <img src={playIcon} alt="Play/Pause" className="control-icon" />
        </button>
        <button className="control-button">
          <img src={nextIcon} alt="Next" className="control-icon" />
        </button>
      </div>
      <div className="current-track">
        <img src={albumImage} alt={artistName} className="album-image" />
        <div className="track-info">
          <span className="song-title">{songTitle}</span>
          <span className="artist-name">{artistName}</span>
        </div>
        <div className="track-actions">
          <button className="control-button">
            <img src={likeIcon} alt="Like" className="control-icon" />
          </button>
          <button className="control-button">
            <img src={dislikeIcon} alt="Dislike" className="control-icon" />
          </button>
        </div>
      </div>
      <div className="additional-controls">
        <button className="control-button">
          <img src={shuffleIcon} alt="Shuffle" className="control-icon" />
        </button>
        <button className="control-button">
          <img src={volumeIcon} alt="Volume" className="control-icon" />
        </button>
      </div>
    </div>
  );
};

export default PlaybackBar;
