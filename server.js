const express = require ("express")
const app = express();


const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get("/", (req,res)=>{
    res.send(`Welcome to the Pokemon App!`);
})


let pokemon = require("./models/pokemon");
let pokeData = require("./models/pokemon");

app.get("/pokemon", (req, res)=>{
    res.render("Index", {pokemon:pokemon});
});

//app.get("/pokemon/:id", (req, res)=>{
//    res.send(pokemon[req.params.id]);
//});

app.get("/pokemon/:character", (req, res)=>{
    res.render("Show", {pokemon: pokeData[req.params.character]})
})


app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})
