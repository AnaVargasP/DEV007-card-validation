import validator from './validator.js';

//llamar del html 
const boton = document.getElementById('procesarpago');  
const contenidoinput = document.getElementById('inputnumerotarjeta'); 
const nombretarjeta = document.getElementById ('inputNombre')


//definir el evento para cuando hacen  click en el boton 
boton.addEventListener('click', () => {
  // Verificar si los campos están vacíos
  if (contenidoinput.value === "" || nombretarjeta.value === "") {
    alert("Por favor complete todos los campos.");
    return; // Salir de la función si faltan campos por completar
  }

  // Llamar a la función isValid del objeto validador y como parametro el # de la tajeta 
  const isValid = validator.isValid(contenidoinput.value);

  // Obtener el valor enmascarado de la tarjeta
  const enmascarado = validator.maskify(contenidoinput.value);

  // Mostrar la alerta con el resultado de la validación y el valor enmascarado
  if (isValid) {
    alert( `Hola ${nombretarjeta.value}. La tarjeta de crédito ${enmascarado} es válida.`);
  } else {
    alert(`Hola ${nombretarjeta.value}. La tarjeta de crédito ${enmascarado} no es válida.`);
  }
});
