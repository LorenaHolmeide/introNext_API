This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Intro Next.js assignment README

## Requirements:
## Ability to retrieve a collection (list) from a resource (endpoint)
In the `pages/api/data.js` file, an API endpoint is defined to handle GET requests to `/api/data`. When a GET request is sent to this endpoint, the API responds with album data (a collection) in JSON format, effectively retrieving a collection of albums.

## Sending data to the same resource or a different resource
In the `pages/albums.js file`, functionality is defined to add a new album by sending a POST request to `/api/data`. The handleAddAlbum function constructs a POST request with the new album data (name, artist, genre) in the request body, effectively enabling the sending of data to the `/api/data` resource.

## Creating a page with a suitable URL, where I have addressed the points above. And be able to navigate to this page from the home page.
This is achieved in `albums.js`. It can be navigated to from the home page by clicking on the "Go to Albums" link in `index.js`.

## Ability to retrieve a single item from the same resource.
In the `pages/album.js` file, the router query parameter is utilized to retrieve the album name.
A GET request is then constructed to `/api/data` with the album name as a query parameter, allowing the retrieval of details about a specific album.