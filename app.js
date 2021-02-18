const express = require('express');

const app = express();

const cors = require('cors');

const { albums } = require('./data.js');

app.use(cors());

app.get(
    '/something',
    (
        req,
        res
    ) => {
        res.json({ some: 'thing' });
    }
);

app.get('/albums', (req, res) => {
    console.log('albums, albums');
    res.json({ results: albums });
});

app.get('/albums/:id', (req, res) => {
    const id = Number(req.params.id);

    const selectedAlbum = albums.find((album) => album.id === id);

    res.json({ results: selectedAlbum });
});

module.exports = {
    app
};