import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreatePlaylist.css';

interface CreatePlaylistProps {
  addPlaylist: (playlist: { title: string; description: string; image: string }) => void;
}

const CreatePlaylist: React.FC<CreatePlaylistProps> = ({ addPlaylist }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [title, description, imageUrl]); // Re-evaluate form validity when any input changes

  const validateForm = () => {
    setIsFormValid(title !== '' && description !== '' && imageUrl !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
    if (name === 'imageUrl') setImageUrl(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlaylist = { title, description, image: imageUrl };
    addPlaylist(newPlaylist);

    // Save to localStorage
    const existingPlaylists = JSON.parse(localStorage.getItem('newPlaylists') || '[]');
    existingPlaylists.push(newPlaylist);
    localStorage.setItem('newPlaylists', JSON.stringify(existingPlaylists));

    navigate('/'); // Redirige al inicio después de agregar la playlist
  };

  return (
    <div className="create-playlist">
      <header>
        <h1>Crea tu playlist</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            placeholder="Ingrese el título"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="Ingrese la descripción"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Imagen URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={handleInputChange}
            placeholder="Ingrese la URL de la imagen"
          />
        </div>
        <button type="submit" disabled={!isFormValid}>Agregar Playlist</button>
      </form>
      <div className="preview">
        {imageUrl && <img src={imageUrl} alt="Preview" className="preview-image" />}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CreatePlaylist;
