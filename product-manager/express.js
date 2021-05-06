const express = require('express');

const server = express();
const hostname = '127.0.0.1';
const port = 3000;

var productsRoute = require('./routes/products');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/products', productsRoute);

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});