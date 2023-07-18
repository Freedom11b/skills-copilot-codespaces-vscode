// Create web server 
// 1. Create a web server
// 2. Handle requests
// 3. Return a response
// 4. Listen on a port

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Handle requests
app.get('/', (req, res) => {
    res.send('Hello world');
});

// 3. Return a response
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

// 4. Listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Run this file with node comments.js
// Go to http://localhost:3000/api/comments in a browser
// You should see the comments array

// Create a new comment
// 1. Require Joi
// 2. Add Joi validation
// 3. Create a new comment
// 4. Add the new comment to the comments array
// 5. Return the new comment

// 1. Require Joi
const Joi = require('joi');

// 2. Add Joi validation
app.post('/api/comments', (req, res) => {
    const schema = {
