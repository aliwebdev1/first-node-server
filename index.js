const express = require('express');
const products = require('./products.json');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('Our node server is ready to fight and and');
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    console.log(id);
    const product = products.find(product => product.id === id) || {};
    res.send(product)
})

app.listen(port, () => {
    console.log(`My First node runing on: ${port}`);
})