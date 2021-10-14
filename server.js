const express = require('express');
const app = express();
//app.listen - it will send to browser
const PORT = process.env.PORT || 8080;
// server?
const server = require('http').Server(app);
const router = require('./routes');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
