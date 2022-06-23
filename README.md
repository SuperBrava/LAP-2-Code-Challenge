# LAP-2-Code-Challenge - Build a Database

## Installation & Usage

### Installation

* Clone or download this repo.
* From the terminal, cd into “.\LAP-2-Code-Challenge\api”.
* Run “npm install” to install the required dependencies.

### Usage
* From “.\LAP-2-Code-Challenge\api” in the terminal: run “npm start” to initialise the server.
* The server will start on “http://localhost:3000/”
* Open a new terminal and cd into “.\LAP-2-Code-Challenge\client”.
* To open the client run “open index.html”(Mac) / ”start index.html”(Windows).

### Testing the server

* From “.\LAP-2-Code-Challenge\api” in the terminal: run either “npm start” or “npm run dev” to initialise the server.

* Once the server is running, go to local http://localhost:3000/ get a welcome message.

* Navigating to http://localhost:3000/posts will show you all of the posts stored in the external database.

* Using the Id number of an existing post you can navigate to “http://localhost:3000/posts/ + (id number)” to get the data only for that specific post.

* Testing the creation of a new post: using an API platform like Postman or the Thunder Client extension of vs code, send a POST request to “http://localhost:3000/posts/”. In the headers of the request include “Content-Type” as a new key and value “application/json” and the body should have the following structure:
{"title":"Test title","author":"Test author","story":"Test story"}

  Once the request is sent, you can navigate to http://localhost:3000/posts in the browser to find the new post at the bottom.

## Requirements

[  ] Your app should have a browser client allowing users to write a post with a title, a pseudonym and a body

[  ] No login should be required to create a post or visit a post

[  ] When a user hits 'publish', the post should be stored in a database and the client redirected to a show path

[  ] The user should be able to access their post using that show path even after a server restart

[  ] Edit and delete functionality is not required


