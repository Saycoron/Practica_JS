var coverMedidaUti = require('./converMedida')

function converInfo (tipo, medida, unidadMedidaIni, unidadMedidaFin) {

  if (tipo === 'Distancia') {
    var dDistanciaRetorno = coverMedidaUti(medida, unidadMedidaIni, unidadMedidaFin)

    return dDistanciaRetorno
  }
}

module.exports = converInfo
