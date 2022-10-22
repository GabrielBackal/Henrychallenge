/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function puntosDelEquipo(array) {
  // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  // en este formato ["3:1", "2:2", "0:1", ...]
  //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  //que su resultado es el primero en cada string
  // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  // Tu código aca:
// Method 2(perform only 1 iteration)
let totalPoints = 0
// Use map to manipulate array and add logic
array.map(function(item){
  // Replace all ":" characters with empty sting to get string like "31", "22"
  let itemString = item.replaceAll(/:/g, '');
  // Add to the count based on points logic
  if(parseInt(itemString[0]) > parseInt(itemString[1])){
    totalPoints+=3
  } else if(parseInt(itemString[0]) === parseInt(itemString[1])){
    totalPoints+=1
  } else{
    totalPoints+=0
  }
})
return totalPoints;
}


// No modifiques nada debajo de esta linea //

module.exports = puntosDelEquipo