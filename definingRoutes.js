const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Define a route for a specific path
app.get('/about', (req, res) => {
    res.send('About page');
});
