const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// App routes

app.use('/cats', require('./controllers/cats'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
