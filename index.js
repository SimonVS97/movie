const express = require('express');
const morgan = require('morgan');
const app = express();

let topMovies = [
  {
    title: 'In Bruges',
    year: '2008'
  },
  {
    title: 'The Godfather I',
    year: '1972'
  },
  {
    title: 'The Godfather II',
    year: '1974'
  },
  {
    title: '7 Psychos',
    year: '2012'
  },
  {
    title: '12 Angry men',
    year: '1957'
  },
  {
    title: 'Pulp Fiction',
    year: '1994'
  },
  {
    title: 'Vertigo',
    year: '1958'
  },
  {
    title: 'Psycho',
    year: '1960'
  },
  {
    title: 'Das Boot',
    year: '1981'
  },
  {
    title: 'Berlin Calling',
    year: '2008'
  }

];

// Middleware

app.use(express.static('public'));
app.use(morgan('common'));


// GET requests


app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

/*app.get('/documentation', (req, res) => {                  
  res.sendFile('/documentation.html', { root: __dirname });
});*/

app.get('/movies', (req, res) => {
  res.json(topMovies);
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});