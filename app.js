// fo applikacio



// initializing the main stuff

// expres variable pointing to the framework
var express = require("express");
// main app variable by calling the express function
var app= express();






// routes - here we have the routes 
// landing page
app.get("/",function(req,res){
   // res.send("Itt lesz a sirulo website fo oldala");
    res.render("landing.ejs");
});





// start the server in IP and PORT provided by Cloud9 API 
app.listen(process.env.PORT,process.env.IP,function(){
    console.log(" sirulo szerver is listening on :" + process.env.IP + ":" + process.env.PORT );
});



//-----
//----------





