function conversorPlaneta (peso, planeta) {

  var dPeso = parseFloat(peso)
  var sPlaneta = planeta
  var dG_tierra = 9.8
  var dG_marte = 3.7
  var dG_jupiter = 24.8
  var dPeso_final
  

  if (sPlaneta === 'MARTE')
    {
      dPeso_final = dPeso * dG_marte / dG_tierra
    }
    else if(sPlaneta == 'JUPITER')
    {
      dPeso_final = dPeso * dG_jupiter / dG_tierra
    }
  
  return dPeso_final   
}

module.exports = conversorPlaneta;