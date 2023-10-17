import Link from 'next/link';
import Head from 'next/head'

import { useState, useEffect } from 'react';

const Albums = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [albums, setAlbums] = useState([]);
    const [newAlbum, setNewAlbum] = useState({
        name: '',
        artist: '',
        genre: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        setAlbums(data);
    };

    const handleAddAlbum = async () => {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlbum),
        });

        if (response.ok) {
            setNewAlbum({ name: '', artist: '', genre: '' });
            fetchData();

        } else if (response.status === 404) {
            const errorData = await response.json();
            setErrorMessage(errorData.message);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleAddAlbum()
    }

    return (
        <div className="container">
            <Head>
                <title>Albums</title>
            </Head>
            <h1>Your albums</h1>

            {albums.map((album) => (
                <li key={album.id} className="item">
                    <strong>Name:</strong> {album.name},&nbsp;
                    <strong>Artist:</strong> {album.artist},&nbsp;
                    <strong>Genre:</strong> {album.genre}
                </li>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newAlbum.name || ''}
                    onChange={(e) => setNewAlbum({ ...newAlbum, name: e.target.value })}
                    placeholder="Enter album name"
                    id="newAlbumName"
                    name="newAlbumName"
                />
                <input
                    type="text"
                    value={newAlbum.artist || ''}
                    onChange={(e) => setNewAlbum({ ...newAlbum, artist: e.target.value })}
                    placeholder="Enter artist"
                    id="newAlbumArtist"
                    name="newAlbumArtist"
                />

                <input
                    type="text"
                    value={newAlbum.genre || ''}
                    onChange={(e) => setNewAlbum({ ...newAlbum, genre: e.target.value })}
                    placeholder="Enter genre"
                    id="newAlbumGenre"
                    name="newAlbumGenre"
                />
                <button type="submit">Add album</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <h4>Click the links below to go to an album page</h4>
            <ul className="itemList">
                {albums.map((album, index) => (
                    <li key={index} className="item">
                        <Link href={`/album?album=${album.name}`}>
                            Album Page: {album.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;