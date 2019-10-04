const http = require('http');

http.createServer((req,res) =>{

    res.writeHead(200,{"Content-Type" : "application/json"})

    let carro = {
        placa:'ABC123',
        modelo:'2019',
        marca:'Mazda',
        puertas: 4
    }
    //res.write(`Soy un server desde ${req.url}\n`);    
    //res.write(`Carro:${carro.placa}`);

    //stringify()=>convertir de object a JSON
    //parse()=>convertir de JSON  a object

    if(req.url == "/"){
        res.write("Hola soy el index");
    }else if(req.url == "/solicitud"){
        res.write("Hola, soy un peticion Solicitud");
    }else if(req.url == "/carro"){
        res.write("Hola, soy un peticion Carro.\n");
        res.write(JSON.stringify(carro));
    }else{
        res.write("Que estas haciendo!!!");
    }    
    res.end();

}).listen(8989);

console.log("Server andando");
