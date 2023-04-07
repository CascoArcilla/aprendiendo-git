
/*
const { request } = require('http');
const path = require('path');

app.listen(3232, () =>{
    console.log("Corriendo en el pueto 3232")
})

//Rutas
app.get('/', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/empresa', (request, response)=>{
    response.send({
        nombre: 'Lope Montano'
    })
})
*/

const http = require("http");

//import { createServer } from "http";

function sitioWeb(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.sendFile('index.html');
}

let servidor = createServer(sitioWeb);

servidor.listen(2525, "192.168.0.105");

console.log("Servidor iniciado en puerto 2525");