function conversorPlaneta (peso, planeta) {

  var dPeso = parseFloat(peso)
  var sPlaneta = planeta
  var dGravedadTierra = 9.8
  var dGravedadPlaneta
  var dPeso_final
  

  if (sPlaneta === 'MARTE') { dGravedadPlaneta = 3.7 } 
  if (sPlaneta === 'JUPITER') { dGravedadPlaneta = 23.12 }
  if (sPlaneta === 'MERCURIO') { dGravedadPlaneta = 2.78 }
  if (sPlaneta === 'VENUS') { dGravedadPlaneta = 8.87 }
  if (sPlaneta === 'SATURNO') { dGravedadPlaneta = 10.44 }
  if (sPlaneta === 'URANO') { dGravedadPlaneta = 8.69 }
  if (sPlaneta === 'NEPTUNO') { dGravedadPlaneta = 11 }

  dPeso_final = dPeso * dGravedadPlaneta / dGravedadTierra
  return dPeso_final   
}

module.exports = conversorPlaneta;