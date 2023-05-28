/*import { actualizarEstado, getDatosLlamada, setDescripcionOperador, setDuracion } from "./llamada.js";
import { mostrarPantalla,
    solicitarDescripcionOperador,
    solicitarAccionRequerida,
    solicitarConfirmacionOperador,
    informarExitoRegistroAccion } from "./pantallarespuestaoperador.js";*/

export class GestorRespuestaOperador {
    constructor(llamadaActual, categoriaSeleccionada, opcionLlamadaSeleccionada,
        subOpcionSeleccionada){
            this.llamadaActual = llamadaActual;
            this.categoriaSeleccionada = categoriaSeleccionada;
            this.opcionLlamadaSeleccionada = opcionLlamadaSeleccionada;
            this.nombreCliente = null;
            this.subOpcionSeleccionada = subOpcionSeleccionada;
            this.fechaHoraActual = null;
            this.estadoLlamada = null;
            this.validaciones = null;
            this.datosLlamadaAMostrar = null;

    }

    RegistrarRespuestaOperador(){ // En teoria todos los metodos del gestor estan aca adentro en orden de ejecucion
        pantalla.mostrarPantalla();//le invoco el metodo a la Pantalla
        
        this.buscarEstadoEnCurso(estados);

        let fechaInicioLlamada = this.getFechaActual();

        this.llamadaActual.actualizarEstado(this.estadoLlamada, fechaInicioLlamada);

        this.validaciones = this.buscarValidaciones();
        this.validaciones = this.ordenarValidaciones(this.validaciones); //chequear que ordene

        this.nombreCliente = this.buscarNombreCliente();

        this.datosLlamadaAMostrar = this.llamadaActual.getDatosLlamada(); //hasta aca controlado perfecto

        this.mostrarDatosLlamada();
        //aca tengo dudas de donde haria el loop de validaciones
        //aca tengo dudas de como llamaria al otro caso de uso

        this.buscarEstadoFinalizado();
        this.calcularDuracionLlamada();
        this.llamadaActual.setDuracion();
        this.finCasoDeUso();
    }

    buscarEstadoEnCurso(estados) {
        // meto en una constante el array estados, luego buso el esEncurso y si lo encuentra
        //asigna al atributo estadoEnCurso el nombre. sino lo encuentra devuelve null
        for (const estado of estados) {
          if (estado.esEnCurso()) {
            this.estadoLlamada= estado.nombre
            return estado;
          }
        }
        return null;
      }
    
    //asigno fecha y hora al atributo
    getFechaActual() {
        const fechaActual = new Date(); 
        this.fechaHoraActual = fechaActual
        return fechaActual; //retorno la fecha para ser comparada
    }

    buscarValidaciones(llamada) {
        return llamada.getValidaciones();
    }

    ordenarValidaciones(validaciones) {
        this.validaciones.sort((a, b) => a.nombre.toUpperCase.localeCompare(b.nombre.toUpperCase));
    }

    buscarNombreCliente() {
        return this.llamadaActual.getNombreCliente()
    }

    mostrarDatosLlamada() {
          PantallaRespuestaOperador.mostrarSubOpcionSeleccionada(datos.subOpcion);
    }

    verificarSeleccionOpcion(validacion, seleccionOpcion) { // verificar metodo porque me parece que esta mal
        if (!llamada.esOpcionCorrecta(validacion, seleccionOpcion)) {
            return 'La opcion no es correcta'
        }
    }

    tomarDescripcionOperador() {

    }

    tomarAccionRequerida() {

    }

    tomarConfirmacionOperacion() {

    }

    buscarEstadoFinalizado(estados) {
        //lo mismo que esEnCurso
        for (const estado of estados) {
            if (estado.esFinalizado()) {
                this.estadoLlamada = estado.nombre
                return estado;
            }
          }
          return null;
    }

    calcularDuracionLlamada() {

    }

    finCasoDeUso() {

    }
}