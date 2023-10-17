let idCounter = 1; // Initialize a counter for item IDs starting from 1
const data = [
    { id: idCounter++, name: 'Kind of Blue', artist: 'Miles Davis', genre: 'Jazz' },// Create an item object with an ID and a name
    { id: idCounter++, name: "Sgt. Pepper's Lonely Hearts Club Band", artist: 'The Beatles', genre: 'Poprock' },// Increment the counter and assign it as the item's ID
    { id: idCounter++, name: 'Coldplay Viva la Vida or Death and All His Friends', artist: 'Coldplay', genre: 'Poprock' },
    { id: idCounter++, name: 'Back to Black', artist: 'Amy Winehouse', genre: 'Soul, R&B' }

]

export default (req, res) => {
    if (req.method === 'GET') {
        // If the request method is GET, respond with the data (item collection)
        res.status(200).json(data);
    } else if (req.method === 'POST') {
        // If the request method is POST, handle adding a new item
        const newAlbum = req.body; // Extract the new item data from the request body

        if (!newAlbum.name || !newAlbum.artist || !newAlbum.genre) {
            res.status(404).json({ message: 'No album added, please add an album' });
            return;
        }

        const newAlbumWithId = { id: idCounter++, ...newAlbum };
        data.push(newAlbumWithId); // Add the new item to the data collection
        res.status(201).json({ message: 'Album added successfully', newAlbum: newAlbumWithId });// Respond with a success message and the newly added item
    }

};

