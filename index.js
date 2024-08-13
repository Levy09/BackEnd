const http = require ('http')
const PORT = 3000;

const requestHandler = (req, res) => {

    res.setHeader ('content-Type', 'application/json');

        if(req.url === '/api' && req.method === 'GET'){
            const response = {message: 'Hello, world !'

            }

            res.writeHead(200);
            res.end(JSON.stringify(response));
        }else{
            res.writeHead(404);
            res.end(JSON.stringify({message:'not found'}));
        }
}

const server = http.createServer (requestHandler);


server.listen(PORT , () => {
    console.log (`server is running on http://localhost:${PORT}`)
});