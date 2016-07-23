var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var router;
//controlador generador
router = express.Router();
var controladorGenerarJson = require("./Controlador/ControladorGenerador.js")
app.use('/Generar',router);
controladorGenerarJson(router);


app.listen(8090);