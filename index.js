//validacion de email con exprecion regular
function Valida_email(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@inacapmail\.cl$/
  return regex.test(email)
} 

//validacion de que no haya numeros en el nombre
function valida_nombres(nombre){
  let regex = /^[a-zA-Z]+$/;
  return regex.test(nombre)
}

document.getElementById('Formulario').addEventListener('submit', function (event) {
  let errores = []
  let nombre = document.getElementById('nombre').value
  let correo = document.getElementById('email').value

  //Refierase a la funcion
  if (!Valida_email(correo)) {
    errores.push('El correo esta incorrecto, el correo debe terminar en la extencion "@inacapmail.cl"')
  }

  //Refierase a la funcion
  if (!valida_nombres(nombre)) {
        errores.push('El nombre no puede contener numeros y debe ser mas largo que 2 caracteres')
    }

  //comprobacion de que no haya errores, si los hay se cancela el envio y los muestra en pantalla
  if (errores.length > 0) {
    event.preventDefault();
    document.getElementById('errores').innerHTML = errores.join('<br>');
  }
})
