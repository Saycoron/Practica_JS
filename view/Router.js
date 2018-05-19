var express = require('express')
var web = express.Router()
var bodyParser = require('body-parser')
var converInfoConector = require('../controler/converInfoConector')

web.use(bodyParser.json())
web.use(bodyParser.urlencoded({ extended: true }))

web.get('/', function (req, res) {
  res.sendfile('view/conver/index.html')
})

web.post('/converDistancia', function (req, res) {
  var dRetorno
  var sTipo = req.body.tipo
  var dMedida = req.body.distancia
  var sUnidadDeMedidaIni = req.body.medidaInicial
  var sUnidadDeMedidaFin = req.body.medidaFinal
  
  dRetorno = converInfoConector(sTipo, dMedida, sUnidadDeMedidaIni, sUnidadDeMedidaFin)

console.log(dRetorno)
  res.send("La distancia es "+dRetorno+" "+sUnidadDeMedidaFin)
})

module.exports = web
