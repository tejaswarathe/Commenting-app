# Commenting-app
Commenting app based on MERN stack.
This app is commenting webapp where a person can add a comments along with his name, delete the comment and give upvotes or downvotes to a comment.
The apps frontend is based on ReactJs.
I have used axios library to fetch data from a custom made API. The app can give GET, POST, PUT, and DELETE request to the API.

The backend API is based on ExpressJs which has a simple data model to store the username,comment text, number of upvotes and number of downvotes.
The database used here is MongoDB where I used thier free cloud service.


# Setting up the app
To set up the app on a local system, follow the steps:

Clone the repository on your local machine.

Make sure you have node install on your system.

Change directory to comments-api.

$ `cd comments-api`

Run the folowing command to start server.

$ `npm start`

The API starts running on the server.

Keep the terminal window open and start another terminal.

Change directory to commenting-app.

`cd commenting-app`

Run the following command to start server.

`npm start`

The server starts running and a browser window opens with the react app.
