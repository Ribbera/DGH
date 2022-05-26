const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // Middleware
app.use(express.json());
app.use(express.static("express"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'express/assets')));
// default URL for website
// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/express/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/express/login.html');
});

// Route to Web hosting Page
app.get('/hosting-web', (req, res) => {
  res.sendFile(__dirname + '/express/web.html');
});

// Route to Vps hosting Page
app.get('/hosting-vps', (req, res) => {
  res.sendFile(__dirname + '/express/vps.html');
});

// Route to Dedicated hosting Page
app.get('/dedicados', (req, res) => {
  res.sendFile(__dirname + '/express/dedicated.html');
});

// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/express/404.html');
})



const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
console.debug('Server listening on port ' + port);