/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function fakeBinary(size) {
  // La funcion llamada 'fakeBinary' recibe como argumento size(tamaño) que es un numero (entero)
  // y debe devolver un string de 1s y 0s con el tamaño indicado.
  // siempre empieza por 1
  // Por ej:
  // fakeBinary(10) devuelve "1010101010"
  // fakeBinary(3) devuelve "101"
  // Tu código aca:
  let final = ''
  // Iterate to the size
  for(let i = 0; i < size; i++){
    // join 1 and 0 according to the size and stor to final string
    final = final.concat('10')
  }
  // return the final string
  return final.slice(0, size);
}



// No modifiques nada debajo de esta linea //

module.exports = fakeBinary