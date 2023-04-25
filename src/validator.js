const validator = {

  isValid: function (contenidoinput) {

    // Paso 1: Convertir el número de tarjeta en un array de dígitos
    const digits = contenidoinput.toString().split('').map(Number);

    // Paso 2: Iterar sobre los dígitos, comenzando desde el último dígito
    for (let i = digits.length - 2; i >= 0; i -= 2) {

      // Paso 3: Multiplicar los dígitos en posiciones pares por 2
      let posicionPar = digits[i] * 2;

      // Paso 4: Si el resultado de la multiplicación es mayor o igual a 10, sumar los dígitos del resultado
      if (posicionPar >= 10) {
        posicionPar = posicionPar.toString().split('').map(Number).reduce((a, b) => a + b, 0);
      }

      // Paso 5: Reemplazar el dígito original con el resultado de la multiplicación
      digits[i] = posicionPar;
    }

    // Paso 6: Sumar todos los dígitos
    const sum = digits.reduce((a, b) => a + b, 0);

    // Paso 7: Validar que la suma sea divisible por 10
    if (sum % 10 === 0) {
      return true;
    } else {
      return false;
    }

  },

  maskify: function (contenidoinput) {
    if (contenidoinput.length <= 4) {
      // Si la longitud de la entrada es menor a 4, retornar un mensaje de error
      return contenidoinput ;
    }

    //obtener los ultimos cuatro digitos de la tarjeta 
    else {
      const ultimoscuatro = contenidoinput.slice (-4);
      //hacer una cadena con # del mismo tamaño que la original menos los ultimos cuatro
      const enmascarar= "#" .repeat (contenidoinput.length-4) + ultimoscuatro;
      //devolver la cadena enmascarada
      return enmascarar}
  }

}




export default validator;
