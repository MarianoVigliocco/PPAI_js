import { GestorRespuestaOperador } from "./gestor.js";

class PantallaRespuestaOperador {
  constructor() { }


  mostrarDatosLlamada(nombre, categoria, opcion, subopcion) {
    const tabla = document.getElementById("contTabla")
    const element = document.createElement("div");
    element.innerHTML = `
        <div id="tabla-llamadas">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">NombreCliente</th>
                <th scope="col">Categoria</th>
                <th scope="col">Opcion</th>
                <th scope="col">SubOpcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${nombre}</td>
                <td>${categoria}</td>
                <td>${opcion}</td>
                <td>${subopcion}</td>
              </tr>
            </tbody>
          </table>
        </div>
        `;
    tabla.appendChild(element);
  }

  mostrarValidacion(validacion, num) {
    const seccion_val = document.getElementById(`seccion_val` + num);
    let opcionesHTML = '';
    
    for (var i = 0; i < validacion.opcionesValidacion.length; i++) {
      opcionesHTML += `
        <div class="form-group">
          <input class="form-check-input" type="radio" name="opcion${num}" id="opcion${i + 1}" value="${validacion.opcionesValidacion[i].descripcion}">
          <label class="form-check-label" for="opcion1">
            ${validacion.opcionesValidacion[i].descripcion}
          </label>
        </div>
      `;
    }

    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card-header">
        <h4>${validacion.nombre}</h4>
      </div>
      <form id="validacion${num}" class="card-body">
        <div class="col" id="seccion_val${num}">
          ${opcionesHTML}
        </div>
        <input type="submit" value="Confirmar" class="btn btn-primary btn-block" />
      </form>
    `;

    seccion_val.appendChild(element);
  }

  mostrarOpcionesPorValidacion(opciones, num) {
    const seccion_opc = document.getElementById('seccion_val' + num);
    for (var i = 0; i < opciones.length; i++) {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="form-group" style="margin-left: 40px;">
          <input class="form-check-input" type="radio" name="opcion${num}" id="opcion${i + 1}" value="${opciones[i].descripcion}">
          <label class="form-check-label" for="opcion1">
            ${opciones[i].descripcion}
          </label>
        </div>
      `;
      seccion_opc.appendChild(element);
    }
  }




  mostrarValidaciones(validaciones) {
    for (var i = 0; i < 3; i++) {

    }
  }
}

export default PantallaRespuestaOperador;