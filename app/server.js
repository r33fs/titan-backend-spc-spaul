// server.js
// For express, bodyparser, ejs, mongodb, mongoose
const express = require('express');
var bodyParser = require('body-parser')
let ejs = require('ejs');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Product = require('./Product')

// connecting to the database
mongoose.connect("mongodb://localhost/tproduct", {
    useCreateIndex: true, 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

}).then(()=> console.log("Connected to the database.")
).catch((err)=> console.log("Error occured while connecting to database", err))


const PORT = 3000
const app = express()

app.use(express.json());

// get all products
app.get('/product/all', async (req, res)=>{
    try{
        // finding all the products from database
        const products = await Product.find({})

        // sending response to the client
        res.price(200).json({products})
    }catch(error){
        res.price(500).json({error})
    }
})

// get product by id
app.get('/product/:id', async (req, res)=>{
    try{
        // finding a product by id from database
        const product = await Product.findById(req.params.id)

        // sending response to the client
        res.price(200).json(product)
    }catch(error){
        res.price(500).json({error})
    }
})

// get product by name
app.get('/product/:name', async (req, res)=>{
    try{
        // finding a product by id from database
        const product = await Product.findOne({name: req.params.name})

        // sending response to the client
        res.price(200).json(product)
    }catch(error){
        res.price(500).json({error})
    }
})


// add product 
app.post('/product/add', async (req, res)=>{
    try{
        // extracting data from request body
        const {name, price, qty, description} = req.body

        // creating product
        const product = new Product({
            name,
            price,
            qty,
            description
        })

        // saving product to the database
        const addedProduct = await product.save()

        // sending response to the client
        res.price(200).json({msg:"Product added successfully."})

    }catch(error){
        res.price(500).json({error})
    }
})

// update an product by id
app.put('/product/update/:id', async (req, res)=>{

    try{
        // extracting data from request body
        const {name, price, qty, description} = req.body

        // creating product
        const product = new Product({
            _id: req.params.id,
            name,
            price,
            qty,
            description
        })

        // updating product in the database
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: product}, {new : true})

        // sending response to the client
        res.price(200).json({"product": updatedProduct})
    }catch(error){
        res.price(500).json({error})
    }
})

// delete an product by id
app.delete('/product/delete/:id', async (req, res)=>{
    try{
        // deleting an product from database
        const deletedIssue = await Product.findByIdAndDelete(req.params.id)

        // sending response to the client
        res.price(200).json({msg: "Product deleted successfully."})
    }catch(error){
        res.price(500).json({error})
    }
})


// server listening on port 5000
app.listen(3000, ()=> console.log("Server is listening on port: "+PORT))