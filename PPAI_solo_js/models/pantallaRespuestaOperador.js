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

  mostrarOpcionesPorValidacion(opciones) {
    for (var i = 0; i < opciones.length; i++) {
      const seccion_opc = document.getElementById('seccionOpc');
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="form-group">
        <input class="form-check-input" type="radio" name="opcion1" id="opcion" value="${opciones[i].descripcion}">
          <label class="form-check-label" for="opcion1">
            ${opciones[i].descripcion}
          </label>
      </div>
    `
      seccion_opc.appendChild(element);
    }
  }

  mostrarValidacion(validacion, num) {
    const seccion_val = document.getElementById(`seccion_val` + num)
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card-header">
        <h4>${validacion.nombre}</h4>
      </div>
      <form id="validacion${num}" class="card-body">
      <div class="col">
        <div id="seccion_val${num}">
        </div>
        <input type="submit" value="Confirmar" class="btn btn-primary btn-block" />
      </div>
    </form>
      `;
      console.log(element)
      seccion_val.appendChild(element);
      console.log(seccion_val)

    this.mostrarOpcionesPorValidacion(validacion.opcionesValidacion)
  }

  mostrarValidaciones(validaciones) {
    for (var i = 0; i < 3; i++) {

    }
  }
}

export default PantallaRespuestaOperador;