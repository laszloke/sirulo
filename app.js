// fo applikacio



// initializing the main stuff

// expres variable pointing to the framework
var express = require("express");
// main app variable by calling the express function
var app= express();





// start the server in IP and PORT provided by Cloud9 API 
app.listen(process.env.PORT,process.env.IP,function(){
    console.log(" sirulo szerver is listening on :" + process.env.IP + ":" + process.env.PORT );
});



//-----
//----------





