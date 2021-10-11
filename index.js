const express = require('express');

const app = express;

const PORT = process.env.PORT || 5000;

//Server
const server = require('http').Server(app);
//router
const router = require('./routes');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

server.listen(PORT, () => {});