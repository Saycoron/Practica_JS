var coverMedidaUti = require('./converMedida')
var coverPlanetaUti = require('./converPlaneta')

function converInfo (tipo, medida, unidadMedidaIni, unidadMedidaFin) {

  if (tipo === 'Distancia') {
    var dDistanciaRetorno = coverMedidaUti(medida, unidadMedidaIni, unidadMedidaFin)

    return dDistanciaRetorno
  }

  if (tipo === 'Planeta') {
    var dDistanciaRetorno = coverPlanetaUti(medida,unidadMedidaIni)

    return dDistanciaRetorno
  }
}

module.exports = converInfo
