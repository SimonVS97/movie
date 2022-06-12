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

// Get all movies
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// Get a single movie
app.get('/movies/:title', (req, res) => {
  let title = req.params.title;

  res.json(topMovies.find((movie) => {
    return movie.name === title;
  }));

});

// Get data on a genre
app.get('/genre/:name', (req,res) => {
  res.send('Successful GET request returns data on a specific genre.');
});

// Get data about a director by name
app.get('/directors/:name', (req,res) => {
  res.send('Successful GET request returns data on a specific genre.');
});

// Allow new user to register
app.put('/user/newuser', (req,res) => {
  res.send('Successful PUT request adds a new user');
});

// Update user info
app.post('/user/:name', (req,res) => {
  res.send('Successful POST request updates info of user');
});

// Add a new movie to their list of favorites
app.put('/user/:name/favoritelist', (req,res) => {
  res.send('Successful PUT request adds a newe movie to list of favorite movies of user.')
});

// Deletes a movie from thier list of favorites
app.delete('/user/:name/favoritelist/:moviename', (req,res) => {
  res.send('Successfull DELETE request delets a movie from the list of favoirtes of a user.');
});

// Delets a user
app.delete('/user/:name', (req,res) => {
  res.send('Successful DELETE request deregisters a user.')
})

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
    res.status(500).send('Something broke!');
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});