const express = require("express");
const app = express();

app.set('view engine','ejs') // set() is for selecting the template engine

const path = require("node:path");

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect('mongodb://0.0.0.0:27017/practice');

// const bodyParser = require('body-parser');  // now no need of body parser as express provides methods for it

app.use(express.json());    // or we can use - app.use(bodyParser.json());

app.use(express.urlencoded());     //OR we can use - app.use(bodyParser.urlencoded({extended: true}));

const Product = require('./models/Product')

app.listen(3001, ()=>{
    console.log("listening on 3001")
});

//  --------------------------

app.post('/product/save', async (req,res) => {
    console.log(req.body);
    const product = await Product.create(req.body); 
    if(!product){
        return res.redirect('/new/product')
    }
    res.redirect('/products')
})

app.get('/new/product',(req,res)=>{
    res.render('addNewProduct')
})

app.get('/products', async (req,res)=>{
    const products = await Product.find();
    //res.json(products) // for sending the data
    console.log(products);
    // res.render('products')
    res.render('products',{products});
})

app.get('/products/:pid', async (req,res)=>{  // catching dynamic id
    console.log(req.params.pid)
    const product = await Product.findById(req?.params?.pid);
    res.render('product-details',{product});
})


app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/profile',(req,res)=>{
    const user = {
        name:"Hamza Iqbal",
        email:"hamza@123.com",
        city:"Sukkur",
        skills: ['nodejs','js','c++','java']
    } 
    res.render('profile',{user});
});

app.use('*',(req,res)=>{
    res.render('notfound');
})

// ****************** MiddleWare ***********************

const validateProductMiddleware = (req,res, next)=>{
    const {name, price, qty, manufecturer} = req.body
    if(!name || !price || !aty || !manufecturer){
        return redirect('/new/product')
    }
    next();
}

app.get('/products/save',validateProductMiddleware, asyn (req,res)=>{
    const product = await Product.create(req.params.pid)
    res.render
}); 

