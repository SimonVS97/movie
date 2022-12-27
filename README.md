# movieAPI
 
## Description
This is a web server that stores information about users and movies in a database and edits the database based on http requests.
Users an be created, their information read, updated and deleted.
The movies that are stored in the database can be added to the favorite list of a user. The server also implements authentication and authorization of the user.

## Technologies
This project was created with:
* Node.js
* Express
* MongoDB

## Project dependencies
* Node Js v16.15.1
* Express JS v4.18.1
* bcrypt: "^5.0.1",
* body-parser: "^1.20.0",
* cors: "^2.8.5",
* express-validator: "^6.14.2",
* jsonwebtoken: "^8.5.1",
* lodash: "^4.17.21",
* mongoose: "^6.4.0",
* morgan: "^1.10.0",
* passport: "^0.6.0",
* passport-jwt: "^4.0.0",
* passport-local: "^1.0.0"

## How to user the server
The server runs on this [URL](https://movie-app-svs.herokuapp.com/). <br/>
You can send your requests to this server with Postman.
Please read the documentation for information on the endpoints.

## Endpoints

### Get data of all movies
Endpoint: ```/movies```

HTTP method: GET

Request body data format: none

Response body data format: JSON object holding data about all movies, see below for format

### Get data of a single movie
Endpoint: ```/movies/:title```

HTTP method: GET

URL Params required: title = title of movie, string

Request body data format: none

Response body data format: JSON object holding data about a movie containing description, genre, director, image URL
```
{
  Title: String, (required)
  Description: String, (required)
  Genre: {
    Name: String,
    Description: String
    },
    Director: {
      Name: String,
      Bio: String,
      Birth: Date, ("YYYY")
      Death: Date ("YYYY")
      },
      ImagePath: String,
      Featured: Boolean
}
```

### Get data of a genre
Endpoint: ```/genre/:name```

HTTP method: GET

URL Params required: name = name of genre, string

Request body data format: none

Response body data format: string holding data on a genre

```
"Description"
```

### Get data of a director
Endpoint: ```/directors/:name```

HTTP method: GET

Request body data format: none

Response body data format: JSON object holding data about a director including bio, birth year, death year
```
{
  Name: String,
  Bio: String,
  Birth: Date, ("YYYY")
  Death: Date ("YYYY")
}
```

### Post a new user
Endpoint: ```/users```

HTTP method: POST

Request body data format: JSON object holding data about the new user including username and email
```
{
  Username: String, (required)
  Password: String, (required)
  Email: String, (required)
  Birthday: Date
}
````

Response body data format: JSON object holding data about the new user
```
{
    "Username": String,
    "Password": String,
    "Email": String,
    "Birthday": Date,
    "FavoriteMovies": [],
    "_id": String
}
```

### Get data of a single user

Endpoint: ```/users/:Username```

HTTP method: GET

Request body data format: none

Response body data format: JSON object holding the data about the user
```
{
    "_id": String,
    "Username": String,
    "Password": String,
    "Email": String,
    "Birthday": Date,
    "FavoriteMovies": []
}
````

### Update user data
Endpoint: ```/users/:Username```

HTTP method: PUT

Request body data format: JSON object with the new user infos
```
{
  "Username": String, (required)
  "Password": String, (required)
  "Email": String, (required)
  "Birthday": Date ("YYYY-MM-DD")
}
```
Response body data format: JSON object holding the data about the new user

```
{
  "_id":
  "Username": String, (required)
  "Password": String, (required)
  "Email": String, (required)
  "Birthday": Date, ("YYYY-MM-DD")
  "FavoriteMovies": []
}
```

### Add movie to favorite list of user
Endpoint: ```/users/:Username/movies/:MovieID```

HTTP method: PUT

Request body data format: none

Response body data format: JSON object holding the new data about the user
```
{
  "_id":
  "Username": String, (required)
  "Password": String, (required)
  "Email": String, (required)
  "Birthday": Date, ("YYYY-MM-DD")
  "FavoriteMovies": [...]
}
```

### Remove movie from favorite list of user
Endpoint: ```/users/:Username/movies/:MovieID```

HTTP method: DELETE

Request body data format: none

Response body data format: JSON object holding the data about the user without the deleted movie

```
{
  "_id":
  "Username": String, (required)
  "Password": String, (required)
  "Email": String, (required)
  "Birthday": Date, ("YYYY-MM-DD")
  "FavoriteMovies": [...]
}
```

### Delete user
Endpoint: ```/users/:Username```

HTTP method: DELETE

Request body data format: none

Response body data format: Text message indicating that the user email was removed


Please take a look at the [jsdocs](https://github.com/SimonVS97/movie/tree/main/out)

## Author
Simon Victor Schubert

[Check out my LinkedIn](https://www.linkedin.com/in/simon-schubert/)
