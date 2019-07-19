let express = require("express"); //returns a function
let app = express(); //calling the function returns the object
//Middleware
console.log("Dirname -> "+__dirname); //__dirname returns the absolute path of the current directory.
app.use(express.static(__dirname));
app.get("/",function(request,response){
    console.log("Hello from Express!");
    response.sendFile(__dirname+"/step1-modules.html"); //NodeJS requires absolute file path.
});
app.listen(3030); //takes default hostname as localhost
console.log("Server is now live on localhost:3030");