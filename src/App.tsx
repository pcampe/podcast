import React from 'react';
import Header from './components/Header';
import ListenAgain from './components/ListenAgain';
import QuickPicks from './components/QuickPicks';
import SimilarArtists from './components/SimilarArtists';
import RecommendedAlbums from './components/RecommendedAlbums';
import PlaybackBar from './components/PlaybackBar';
import VerticalNBar from './components/VerticalNBar';
import { similarArtists, user, headerData, playlists, quickPicksSongs, recommendedAlbums } from './data/data';
import './App.css';

const artist1 = {
  name: "Eminem",
  image: "path/to/artist1-image.jpg", 
};

const App: React.FC = () => {
  const currentTrack = quickPicksSongs[0]; 

  return (
    <div className="app">
      <VerticalNBar />
      <Header user={user} headerData={headerData} />
      <main>
        <ListenAgain user={user} playlists={playlists} />
        <SimilarArtists artistName={artist1.name} similarArtists={similarArtists} user={user} />
        <QuickPicks userImage={user.profileImage} songs={quickPicksSongs} />
        <RecommendedAlbums user={user} albums={recommendedAlbums} />
      </main>
      <PlaybackBar
        albumImage={currentTrack.albumImage}
        artistName={currentTrack.artistName}
        songTitle={currentTrack.songTitle}
      />
    </div>
  );
};

export default App;
