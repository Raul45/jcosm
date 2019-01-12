const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

//const Product = require('/models/producto');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/product', (req, res) => {
    res.send(200, { products: [] })
})


app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.send(200, { message: 'El producto se ha recibido' })
})

app.put('/api/product', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/cosmetics', (err, res) => {
    if (err) {
        return console.log('Error al conectar la db');
    }
    console.log('Conexion a la db establecida----');
});


app.listen(3000);
console.log('Esta escuchando en el puerto 3000');