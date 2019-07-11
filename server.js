// Dependencies
const express = require('express');
const hndlbrs = require('express-handlebars');

const routes = require('./controllers/burgers_controller');

// Express instance
const app = express();

// Heroku or localhost PORT
const PORT = process.env.PORT || 8080;

//Static Content
app.use(express.static('public'));

//URL and JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine
app.engine('handlebars', hndlbrs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Express uses our defined routes
app.use(routes);

// Server listener
app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
});