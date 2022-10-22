/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ideas(array) {
  // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
  // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
  // si encontramos por lo menos una 'buena' retornamos 'Activa!'
  // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
  // Por ej:
  // ideas(['hola', 'palabra']) debe devolver 'Fail!'
  // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
  // Tu código aca:
  let count = 0;
  // Iterate the array
  array.forEach(function(item){
    // Check for the string 'buena' and keep count
    if(item === 'buena'){
      // Increase count by 1
      count++;
    } 
  });
  // Use a ternary "?" operator for the return value
  return count > 0 ? (count >= 3) ? "Jackpot!" : "Activa!" : "Fail!" ;
}


// No modifiques nada debajo de esta linea //

module.exports = ideas