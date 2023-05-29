
import { CambioEstado } from "./cambioestado.js";
export class Llamada {
    constructor(descripcionOperador,detalleAccionRequerida,
        duracion,encuestaEnviada,observacionAuditor,cliente,operador,subOpcion,opcion,auditor,categoriaSeleccionada){
            this.descripcionOperador = descripcionOperador;
            this.detalleAccionRequerida = detalleAccionRequerida;
            this.duracion = duracion;
            this.encuestaEnviada = encuestaEnviada;
            this.observacionAuditor = observacionAuditor;
            this.cliente= cliente //es solo el dni, con el metodO getClientePorDNI lo busca
            this.operador= operador
            this.subOpcion= subOpcion
            this.opcion= opcion 
            this.cambioEstado= []
            this.auditor = auditor
            this.categoriaSeleccionada = categoriaSeleccionada

        }

    actualizarEstado(estado, fechaI,fechaF){
            this.crearCambioEstado(estado,fechaI,fechaF)
        }
    crearCambioEstado(estado,fechaI,FechaFin){
        const cambioEstado = new CambioEstado(fechaI,estado,FechaFin)
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
        const subOpcionLlamada = this.subOpcion
        return subOpcionLlamada.getValidaciones()
    }
    getClientePorDni(){
        const dni = this.cliente
        const clientes = this.obtenerClientes()
        for (const cliente of clientes) {
            if(cliente.esTuDNI(dni)) {
                return cliente.getNombre()
            }
        }

    }
    obtenerClientes() {
        clientes = [BaseDatosClientes] //BaseDatosClientes deberia ser un archivo que contenga un array con todos los clientes
        return clientes
    }
    getDatosLlamada(){
        return {
            opcion: this.opcion,
            subOpcion: this.subOpcion,
            categoriaSeleccionada: this.categoriaSeleccionada
        }
    }
    esCorrecta(){

    }
    setDescripcionOperador(descrip){
        this.descripcionOperador = descrip
    }
    
}

