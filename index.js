import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import inquirer from 'inquirer';


const app = express();
const port = 3000;
var product = "";


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





function shoppingCart (req,res, next){
    console.log(req.body);
    product = req.body["productUrl"];
    next();
}


app.use(shoppingCart);

app.get("/", (req, res) => {
    res.render("index.ejs");
    res.locals
  });
app.get("/about", (req, res) => {
    res.render("about.ejs");
    res.locals
  });
  app.get("/contact", (req, res) => {
    res.render("contact.ejs");
    res.locals
  });
  app.get("/blog", (req, res) => {
    res.render("blog.ejs");
    res.locals
  });



  app.post('/blogpost', (req,res)=>{
    res.render('blog.ejs',
    {entry: req.body});

  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  