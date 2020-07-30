var express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Cars Server</h1>');
});

module.exports = server;