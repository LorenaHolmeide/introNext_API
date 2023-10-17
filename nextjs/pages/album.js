
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Album = () => {
    const router = useRouter();
    const { album } = router.query;

    const [albumDetails, setAlbumDetails] = useState(null);

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            if (album) {
                const response = await fetch(`/api/data`);
                if (response.ok) {
                    const data = await response.json();
                    const selectedAlbum = data.find(item => item.name === album);
                    if (selectedAlbum) {
                        setAlbumDetails(selectedAlbum);
                    }
                }
            }
        };

        fetchAlbumDetails();
    }, [album]);

    return (
        <div className="container">
            <h1>Album Details</h1>
            {albumDetails ? (
                <>
                    <p><strong>Name:</strong> {albumDetails.name}</p>
                    <p><strong>Artist:</strong> {albumDetails.artist}</p>
                    <p><strong>Genre:</strong> {albumDetails.genre}</p>
                </>
            ) : (
                <p>Loading album details...</p>
            )}
        </div>
    );
};

export default Album;




