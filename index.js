import express from "express";
import bodyParser from "body-parser";


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

  app.post('/submit', (req,res)=>{
  
    res.send(`Quieres el producto ${product}`);
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  