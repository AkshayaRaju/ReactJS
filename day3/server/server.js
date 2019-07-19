let express = require("express");
let cors = require("cors");
let fs = require("fs");

let app = express();
app.use(cors());

let data = {};
fs.readFile("./data.json",function(error,rdata){
    data = rdata+' ';
 })


app.get("/data",function(req,res){
  res.send(data);
})

app.listen(5050,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Server is now live and running on port 5050");
    }
})