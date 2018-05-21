var express = require('express')
var web = express.Router()
var bodyParser = require('body-parser')
var converInfoConector = require('../controler/converInfoConector')

web.use(bodyParser.json())
web.use(bodyParser.urlencoded({ extended: true }))

web.get('/', function (req, res) {
  res.sendfile('view/main/index.html')
})

//Distancia
web.get('/distancia', function (req, res) {
  res.sendfile('view/conver/index.html')
})

web.post('/converDistancia', function (req, res) {
  var dRetorno
  var sTipo = req.body.tipo
  var dMedida = req.body.distancia
  var sUnidadDeMedidaIni = req.body.medidaInicial
  var sUnidadDeMedidaFin = req.body.medidaFinal
  
  dRetorno = converInfoConector(sTipo, dMedida, sUnidadDeMedidaIni, sUnidadDeMedidaFin)

  dRetorno = (dRetorno.toFixed(2))
  res.send("La distancia es "+dRetorno+" "+sUnidadDeMedidaFin)
})

//Planetas
web.get('/planeta', function (req, res) {
  res.sendfile('view/planeta/index.html')
})

web.post('/converPesoPlaneta', function (req, res) {
  var dRetorno
  var sTipo = 'Planeta'
  var dPeso = req.body.peso
  var sPlaneta = req.body.planeta
  var sNulo = 'NULO'
  
  dRetorno = converInfoConector(sTipo, dPeso, sPlaneta, sNulo)

  dRetorno = (dRetorno.toFixed(2))
  res.send("Tu peso en "+sPlaneta+" es de "+dRetorno)
})

module.exports = web
