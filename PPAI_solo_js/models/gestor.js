/*import { actualizarEstado, getDatosLlamada, setDescripcionOperador, setDuracion } from "./llamada.js";
import { mostrarPantalla,
    solicitarDescripcionOperador,
    solicitarAccionRequerida,
    solicitarConfirmacionOperador,
    informarExitoRegistroAccion } from "./pantallarespuestaoperador.js";*/

    export class GestorRespuestaOperador {
        constructor(llamadaActual, categoriaSeleccionada, opcionLlamadaSeleccionada,dniCliente,estadoEnCurso,
            subOpcionSeleccionada, fechaHoraActual, estadoLlamada, validaciones, estadoFinalizado){
                this.llamadaActual = llamadaActual;
                this.categoriaSeleccionada = categoriaSeleccionada;
                this.opcionLlamadaSeleccionada = opcionLlamadaSeleccionada;
                this.dniCliente = dniCliente;
                this.subOpcionSeleccionada = subOpcionSeleccionada;
                this.fechaHoraActual = null;
                this.estadoLlamada = null;
                this.validaciones = validaciones
    
        }
    
        RegistrarRespuestaOperador(llamadaEntrante){ // En teoria todos los metodos del gestor estan aca adentro en orden de ejecucion
            pantalla.mostrarPantalla(); //le invoco el metodo a la Pantalla
            this.getFechaEstadoActual();
            const estadoEnCurso = this.buscarEstadoEnCurso(estados);
            let fecha = this.getFechaActual();
            llamada.actualizarEstado(estadoEnCurso, fecha);
            const validaciones = this.buscarValidaciones();
            const validacionesOrdenadas = this.ordenarValidaciones(validaciones);
            const nombreCliente = this.buscarClientePorDNI();
            const datosLlamadaAMostrar = llamada.getDatosLlamada();
            this.mostrarDatosLlamada();
            //aca tengo dudas de donde haria el loop de validaciones
            
            pantalla.solicitarDescripcionOperador();
            this.tomarDescripcionOperador();
            llamada.setDescripcionOperador();
            pantalla.solicitarAccionRequerida();
            this.tomarAccionRequerida();
            pantalla.solicitarConfirmacionOperador();
            this.tomarConfirmacionOperacion();
            //aca tengo dudas de como llamaria al otro caso de uso;
            pantalla.informarExitoRegistroAccion();
            this.buscarEstadoFinalizado();
            this.calcularDuracionLlamada();
            llamada.setDuracion();
            this.finCasoDeUso();
        }
    
        getFechaEstadoActual(){
            llamada.getFechaEstadoActual() // le invoco el metodo a llamada
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
    
        ordenarValidaciones() {
    
        }
    
        buscarClientePorDNI() {
            return Llamada.getClientePorDni()
        }
    
        mostrarDatosLlamada(nombre, categoria, opcion, subopcion) {
            PantallaRespuestaOperador.mostrarDatosLlamada(nombre, categoria, opcion, subopcion)
        }
    
        verificarSeleccionOpcion() {
            Llamada.esCorrecta()
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