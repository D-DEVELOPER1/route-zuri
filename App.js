const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("this site is running on: " + req.url)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/home.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});