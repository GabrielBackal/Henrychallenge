/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"
  // Tu código aca:

  String.prototype.repeatCharacters = repeatCharacters;

  // Define the repeatCharacters String
  function repeatCharacters(){
    // We use this to represent the object at the left of the dot at invocation time
    // In our caste it's the string that ivokes repeatCharacters as a method
    const letters = this.split('');
    // Perform a repeat on each character and create a new array
    const repeated = letters.map(letter => letter.repeat(2));
    // use join to get the new string from characters of the array
    return repeated.join('');
  }
}

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres