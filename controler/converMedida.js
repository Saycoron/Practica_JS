function conversorMedida (medida, unidadMedidaIni, unidadMedidaFin) {

  var iIterador
  var iIteradorMax
  var dMedida = parseFloat(medida)
  var iUnidadMedidaIni = numeroDeEscalon(unidadMedidaIni) 
  var iUnidadMedidaFin = numeroDeEscalon(unidadMedidaFin)
  
  if (iUnidadMedidaIni < iUnidadMedidaFin) { 
    iIteradorMax = iUnidadMedidaFin-iUnidadMedidaIni 

    for (iIterador = 0; iIterador < iIteradorMax; iIterador++) {
      dMedida = dMedida/10
    }
    return dMedida
  }

  if (iUnidadMedidaIni > iUnidadMedidaFin) { 
    iIteradorMax = iUnidadMedidaIni-iUnidadMedidaFin 
    
    for (iIterador = 0; iIterador < iIteradorMax; iIterador++) {
      dMedida = dMedida*10 
    }
    return dMedida
  }

  if (iUnidadMedidaIni = iUnidadMedidaFin) { return dMedida }  
}

function numeroDeEscalon (sUnidadDeMedida) {
  var iNumeroEscalera;
  switch (sUnidadDeMedida){
    case('KILOMETRO'):
      iNumeroEscalera=7;
        break;
    case('HECTOMETRO'):
      iNumeroEscalera=6;
        break;
    case('DECAMETRO'):
      iNumeroEscalera=5;
        break;
    case('METRO'):
      iNumeroEscalera=4;
        break;
    case('DECIMETRO'):
      iNumeroEscalera=3;
        break;
    case('CENTIMETRO'):
      iNumeroEscalera=2;
        break;
    case('MILIMETRO'):
      iNumeroEscalera=1;
        break;
  }
  return iNumeroEscalera
}
module.exports = conversorMedida;