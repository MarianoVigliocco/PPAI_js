import { GestorRespuestaOperador } from "../models/gestor.js";
import OpcionValidacion from "../models/opcionvalidacion.js";
import PantallaRespuestaOperador from "../models/pantallaRespuestaOperador.js";
import Validacion from "../models/validacion.js";
import { Llamada } from "../models/llamada.js";

const llamada = new Llamada(null, null, null, null, null, null, null, null, null, null, null, null)
console.log(llamada)

//
const gestor = new GestorRespuestaOperador()
gestor.RegistrarRespuestaOperador

// Objeto tabla 
const pantallaNueva = new PantallaRespuestaOperador()
pantallaNueva.mostrarDatosLlamada('Juan Perez', 'Categoria 1', 'Opcion 5', 'Subopcion 769');

// Muestra de validaciones con opciones
const opciones_1 = new OpcionValidacion(true, 'Toto')
const opciones_2 = new OpcionValidacion(false, 'Tobi')
const opciones_3 = new OpcionValidacion(false, 'Benja')
const vector_opciones = []
vector_opciones.push(opciones_1, opciones_2, opciones_3)

const opciones_4 = new OpcionValidacion(true, 'INSL')
const opciones_5 = new OpcionValidacion(false, 'IGSM')
const opciones_6 = new OpcionValidacion(false, 'ESCMB')
const vector_opciones2 = []
vector_opciones2.push(opciones_4, opciones_5, opciones_6)

const opciones_7 = new OpcionValidacion(false, 'Colmenares 178')
const opciones_8 = new OpcionValidacion(true, 'Jujuy 250')
const opciones_9 = new OpcionValidacion(false, 'Salta 110')
const vector_opciones3 = []
vector_opciones3.push(opciones_7, opciones_8, opciones_9)

const validacion1 = new Validacion('101010', 'Nombre de tu primer perro.', vector_opciones)
const validacion2 = new Validacion('100010', 'Colegio de primaria.', vector_opciones2)
const validacion3 = new Validacion('100001', 'Direccion de tu primera casa.', vector_opciones3)

pantallaNueva.mostrarValidacion(validacion1, 1)
pantallaNueva.mostrarValidacion(validacion2, 2)
pantallaNueva.mostrarValidacion(validacion3, 3)


// DOM Events

document.getElementById('validacion1')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
    var opciones = document.getElementsByName('opcion1');
    var opcionSeleccionada;

    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        opcionSeleccionada = opciones[i].value;
        break;
      }
    }

    if (opcionSeleccionada === gestor.verificarSeleccionOpcion(vector_opciones)) {
      alert('La opcion seleccionada es correcta.');
    } else {
      alert('La opcion seleccionada es incorrecta.');
    }
  });


document.getElementById('validacion2').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  var opciones = document.getElementsByName('opcion2');
  var opcionSeleccionada;

  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada === gestor.verificarSeleccionOpcion(vector_opciones2)) {
    alert('La opcion seleccionada es correcta.');
  } else {
    alert('La opcion seleccionada es incorrecta.');
  }
});

document.getElementById('validacion3').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario por defecto
  var opciones = document.getElementsByName('opcion3');
  var opcionSeleccionada;

  for (var i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada === gestor.verificarSeleccionOpcion(vector_opciones3)) {
    alert('La opcion seleccionada es correcta.');
  } else {
    alert('La opcion seleccionada es incorrecta.');
  }
});

document.getElementById('campo-respuesta').addEventListener('submit', function (event) {
  event.preventDefault();
  const rta_str = document.getElementById('respuesta').value;
  llamada.setDescripcionOperador(rta_str)
  alert('La descripcion se asigno correctamente.')
})

document.getElementById('cancelar').addEventListener('click', function (event) {
  event.preventDefault();
  alert('Cancelar')
})