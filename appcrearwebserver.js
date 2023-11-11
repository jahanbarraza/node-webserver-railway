

const http = require('http');

//Creamos el servidor -- el req es lo que solicita el cliente y 
//el res es la respuesta que le damos al cliente
http.createServer( (req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')  //se le dice al header que vamos a crear un archivo con ese nombre
    res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write('id, Nombre\n');
    res.write( '1, Jahan\n');
    res.write( '2, Carlos\n');
    res.write( '3, Wendy\n');
    res.write( '4, Maria\n');
    res.write( '5, Samuel\n');
    res.end();

} )

.listen( 8080 );

console.log('Escuchando el puerto ', 8080);