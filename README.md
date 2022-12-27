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

## Endpoints

### Get data of all movies
Endpoint: ```/movies```
HTTP method: GET
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
      Birth: Date, ("YYYY-MM-DD")
      Death: Date ("YYYY-MM-DD")
      },
      ImagePath: String,
      Featured: Boolean
}
```

### Get data of a single movie
### Get data of a genre
### Get data of a director
### Post a new user
### Get data of a single user
### Update user data
### Add movie to favorite list of user
### Remove movie from facorite list of user
### Delete user






Please take a look at the [jsdocs](https://github.com/SimonVS97/movie/tree/main/out)

## Author
Simon Victor Schubert

[Check out my LinkedIn](https://www.linkedin.com/in/simon-schubert/)
