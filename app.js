// fo applikacio



// initializing the main stuff

// expres variable pointing to the framework
var express = require("express");
// main app variable by calling the express function
var app= express();


var tancok = [
{name: "Nádasvölgyiek",kep:""},
{name: "Paniti", kep:""},
{name: "Csávási",kep:""}];


// routes - here we have the routes 
// landing page
app.get("/",function(req,res){
    res.render("landing.ejs");
});


//tancok page
app.get("/tancok",function(req,res){
    res.render("tancok.ejs",{tancok:tancok});
});



// start the server in IP and PORT provided by Cloud9 API 
app.listen(process.env.PORT,process.env.IP,function(){
    console.log(" sirulo szerver is listening on :" + process.env.IP + ":" + process.env.PORT );
});



//-----
//-----





