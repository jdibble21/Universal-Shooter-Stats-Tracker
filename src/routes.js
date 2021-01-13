var express = require('express');
var router = express.Router();

router.get("/", function(req,res){
    console.log("--Index requested");
    res.render("index");
    console.log("--Index loaded");
});

router.get("/Help",function (req,res){
    console.log("--Help page requested");
    res.render("Pages/Help");
    console.log("--Help page loaded");
});

router.get("/CreateAccount",function (req,res){
    console.log("--CreateAccount page requested");
    res.render("Pages/CreateAccount");
    console.log("--CreateAccount page loaded");
});

router.get("/LoginAccount",function(req,res){
    console.log("--LoginAccount Page requested");
    res.render("Pages/LoginAccount");
    console.log("--LoginAccount Page loaded");
});

module.exports = router;