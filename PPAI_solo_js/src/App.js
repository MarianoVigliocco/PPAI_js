// DOM Events

document.getElementById('validacion1')
.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  var opciones = document.getElementsByName('opcion1');
  var opcionSeleccionada;

  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada) {
    alert('Opción seleccionada: ' + opcionSeleccionada);
  } else {
    alert('Por favor, selecciona una opción');
  }
});


document.getElementById('validacion2').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  var opciones = document.getElementsByName('opcion2');
  var opcionSeleccionada;

  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada) {
    alert('Opción seleccionada: ' + opcionSeleccionada);
  } else {
    alert('Por favor, selecciona una opción');
  }
});

document.getElementById('validacion3').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  var opciones = document.getElementsByName('opcion3');
  var opcionSeleccionada;

  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada) {
    alert('Opción seleccionada: ' + opcionSeleccionada);
  } else {
    alert('Por favor, selecciona una opción');
  }
});

document.getElementById('campo-respuesta').addEventListener('submit', function(event){
  event.preventDefault();
  const rta_str = document.getElementById('respuesta').value;
  alert(rta_str)
})

document.getElementById('cancelar').addEventListener('click', function(event){
  event.preventDefault();
  alert('Cancelar')
})