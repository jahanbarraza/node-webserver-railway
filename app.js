const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
port = process.env.PORT



//Handlebars
app.set('view engine', 'hbs');// obligacion
hbs.registerPartials(__dirname + '/views/partials' );

//Rutas 
//Servir contenido estatico -- midelwar
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jahan Barraza',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jahan Barraza',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jahan Barraza',
        titulo: 'Curso de Node'
    });
})


app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})


app.get('/*', (req, res) => {
    res.send('404 | Page not Found')
})

app.listen(port, () => {
    console.log(`El Ejemplo esta corriendon en el puerto: ${port}`)
})