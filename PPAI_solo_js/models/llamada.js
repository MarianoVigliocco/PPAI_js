import { CambioEstado } from "./cambioestado.js";
export class Llamada {
    constructor(descripcionOperador,detalleAccionRequerida,
        duracion,encuestaEnviada,observacionAuditor,cliente,subOpcion,opcion,cambioEstado,categoriaSeleccionada){
            this.descripcionOperador = descripcionOperador;
            this.detalleAccionRequerida = detalleAccionRequerida;
            this.duracion = duracion;
            this.encuestaEnviada = encuestaEnviada;
            this.observacionAuditor = observacionAuditor;
            this.cliente = cliente //cambiar en el diag de clases
            this.subOpcion= subOpcion
            this.opcion= opcion 
            this.cambioEstado= cambioEstado
            this.categoriaSeleccionada = categoriaSeleccionada

        }

    actualizarEstado(estado, fechaI){
            this.crearCambioEstado(estado, fechaI)
        }

    crearCambioEstado(estado,fechaI){
        const cambioEstado = new CambioEstado(fechaI,estado)
        this.cambioEstado.push(cambioEstado)
    }

    getEstadoActual(){
            const actual= this.cambioEstado.pop()
            return actual
        }

    setDuracion (){
            const fechaActual = this.getFechaActual();
            const fechaInicio = this.cambioEstado[this.cambioEstado.length - 1].getFechaHoraInicio();
            const duracion = fechaActual - fechaInicio;
            this.duracion = duracion;
        }

    getValidaciones(){
        return this.subOpcion.getValidaciones()
    }

    getNombreCliente(){
            return this.cliente.getNombre()
    }

    getDatosLlamada(){
        return {
            opcion: this.opcion,
            subOpcion: this.subOpcion,
            categoriaSeleccionada: this.categoriaSeleccionada
        }
    }
    esOpcionCorrecta(validacion, seleccionOpcion){
        return this.subOpcion.esOpcionCorrecta(validacion, seleccionOpcion)
    }
    setDescripcionOperador(descrip){
        

    }
    
}

