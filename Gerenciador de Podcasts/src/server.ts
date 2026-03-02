import * as http from 'http';

const server = http.createServer((req, res) => {});

const port = process.env.PORT || 3333;

server.listen(port, () => {
    console.log(`servidor iniciado na porta: ${port}`);
})

