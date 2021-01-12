var express = require('express');
var router = express.Router();

router.get("/", function(req,res){
    console.log("--Index loaded--");
    res.render("index");
});

router.get("/Help",function (req,res){
    console.log("--Help page loaded--");
    res.render("Pages/Help");
});

router.get("/CreateAccount",function (req,res){
    console.log("--CreateAccount page loaded--");
    res.render("Pages/CreateAccount");
});


module.exports = router;