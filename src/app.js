var express = require('express');
var path = require('path');

var app = express();
var routes = require('./routes');

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "view"));
app.set("view engine","ejs");

app.use(routes);
app.use(express.static(__dirname + '/view/assets'));

app.listen(app.get("port"),function (){
    console.log("Server started on port " + app.get("port"));
});

