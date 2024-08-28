import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListenAgain from './components/ListenAgain';
import QuickPicks from './components/QuickPicks';
import SimilarArtists from './components/SimilarArtists';
import RecommendedAlbums from './components/RecommendedAlbums';
import PlaybackBar from './components/PlaybackBar';
import VerticalNBar from './components/VerticalNBar';
import CreatePlaylist from './components/CreatePlaylist';
import { similarArtists, user, headerData, playlists, quickPicksSongs, recommendedAlbums } from './data/data';
import './App.css';

const artist1 = {
  name: "Eminem",
  image: "path/to/artist1-image.jpg",
};

const App: React.FC = () => {
  const [existingPlaylists] = useState(playlists);
  const [newPlaylists, setNewPlaylists] = useState<{ title: string, description: string, image: string }[]>([]);
  const currentTrack = quickPicksSongs[0];

  // Handler to update the new playlists
  const addPlaylist = (newPlaylist: { title: string; description: string; image: string }) => {
    setNewPlaylists(prevData => [...prevData, newPlaylist]);
  };

  return (
    <Router>
      <div className="app">
        <VerticalNBar newPlaylists={newPlaylists} />
        <Header user={user} headerData={headerData} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ListenAgain user={user} playlists={existingPlaylists} />
                <SimilarArtists artistName={artist1.name} similarArtists={similarArtists} user={user} />
                <QuickPicks userImage={user.profileImage} songs={quickPicksSongs} />
                <RecommendedAlbums user={user} albums={recommendedAlbums} />
              </>
            } />
            <Route path="/create-playlist" element={<CreatePlaylist addPlaylist={addPlaylist} />} />
          </Routes>
        </main>
        <PlaybackBar
          albumImage={currentTrack.albumImage}
          artistName={currentTrack.artistName}
          songTitle={currentTrack.songTitle}
        />
      </div>
    </Router>
  );
};

export default App;
