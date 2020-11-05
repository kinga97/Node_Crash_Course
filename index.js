const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead({'Content-Type' : 'text/html'})
        } )
    res.end('<h1>Homepage a node.js-ről</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('A szerverünk működik...'));