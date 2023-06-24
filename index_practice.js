const express = require("express");
const app = express();

const path = require("node:path");
/*
const fs = require("node:fs")

const home = fs.readFileSync(path.resolve(path.join(__dirname,"pages","home.html")));
const about = fs.readFileSync(path.resolve(path.join(__dirname,"pages","about.html")));

app.get('/',(req,res)=>{
    res.writeHead(200,{"Content_Type":"text/html"})
    res.end(home)
});

app.get('/about',(req,res)=>{
    res.writeHead(200,{"Content_Type":"text/html"})
    res.end(about)
});

*/

app.set('view engine','ejs') // set() is for selecting the template engine

app.listen(3001, ()=>{
    console.log("listening on 3001")
});

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



