const express = require ("express")
const app = express();


const port = 3000;


app.get("/", (req,res)=>{
    res.send(`Welcome to the Pokemon App!`);
})


let pokemon = require("./models/pokemon");
console.log(pokemon);

app.get("/pokemon", (req, res)=>{
    res.send(pokemon);
})




app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})

