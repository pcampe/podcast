import userProfileImage from '../assets/images/user.jpeg';
import menuIcon from '../assets/images/menu.png';
import youtubeLogo from '../assets/images/logoYoutube.png';

// Escuchar de nuevo
import playlist1 from '../assets/images/portada1.jpg';
import playlist2 from '../assets/images/portada2.png';
import playlist3 from '../assets/images/portada3.png';
import playlist4 from '../assets/images/portada4.png';

// Similar to
import similarArtist1 from '../assets/images/artist1.jpg';
import similarArtist2 from '../assets/images/artist2.jpg';
import similarArtist3 from '../assets/images/artisti3.jfif';
import similarArtist4 from '../assets/images/artist4.jfif';

// Quick Pics
import albumImage1 from '../assets/images/artist1.jpg';
import albumImage2 from '../assets/images/artist2.jpg';
import albumImage3 from '../assets/images/artisti3.jfif';
import albumImage4 from '../assets/images/artist4.jfif';
import albumImage5 from '../assets/images/artist1.jpg';
import albumImage6 from '../assets/images/artist2.jpg';
import albumImage7 from '../assets/images/artisti3.jfif';
import albumImage8 from '../assets/images/artist4.jfif';
//recomended
import albumRecomended1 from '../assets/images/artist1.jpg';
import albumRecomended2 from '../assets/images/artist2.jpg';
import albumRecomended3 from '../assets/images/artisti3.jfif';
import albumRecomended4 from '../assets/images/artist1.jpg';
import albumRecomended5 from '../assets/images/artist2.jpg';


// Datos del header
export const headerData = {
  menuIcon: menuIcon,
  youtubeLogo: youtubeLogo,
};

// Datos del usuario
export const user = {
  name: "Pablo Campestrini",
  profileImage: userProfileImage,
};

// Datos de las listas de reproductor
export const playlists = [
  { image: playlist1, name: "Lo mejor Latino" },
  { image: playlist2, name: "Rockeala" },
  { image: playlist3, name: "Musica Chill" },
  { image: playlist4, name: "Lo mejor de los 90's" }
];

// Datos de los artistas similares
export const similarArtists = [
  { name: "Artista 1", image: similarArtist1 },
  { name: "Artista 2", image: similarArtist2 },
  { name: "Artista 3", image: similarArtist3 },
  { name: "Artista 4", image: similarArtist4 }
];

// Datos de las canciones sugeridas
export const quickPicksSongs = [
  { albumImage: albumImage1, artistName: "Artista 1", songTitle: "Cancion 1" },
  { albumImage: albumImage2, artistName: "Artista 2", songTitle: "Cancion 2" },
  { albumImage: albumImage3, artistName: "Artista 3", songTitle: "Cancion 3" },
  { albumImage: albumImage4, artistName: "Artista 4", songTitle: "Cancion 4" },
  { albumImage: albumImage5, artistName: "Artista 5", songTitle: "Cancion 5" },
  { albumImage: albumImage6, artistName: "Artista 6", songTitle: "Cancion 6" },
  { albumImage: albumImage7, artistName: "Artista 7", songTitle: "Cancion 7" },
  { albumImage: albumImage8, artistName: "Artista 8", songTitle: "Cancion 8" },
];

export const recommendedAlbums = [
  { image: albumRecomended1, name: 'Ambun Recomendado 1' },
  { image: albumRecomended2, name: 'Ambun Recomendado 2' },
  { image: albumRecomended3, name: 'Ambun Recomendado 3' },
  { image: albumRecomended4, name: 'Ambun Recomendado 4' },
  { image: albumRecomended5, name: 'Ambun Recomendado 5' },

];

import homeIcon from '../assets/images/home.png';

export const icons = {
    home: homeIcon,
};
