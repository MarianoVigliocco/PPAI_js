import { getDescripcion } from "./opcionvalidacion.js"
export class Validacion{
    constructor(audioMensajeValidacion,nombre,nroOrden,opcionesValidacion){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
        this.nroOrden = nroOrden;
        this.opcionesValidacion = opcionesValidacion;
    }
    getDatosValidaciones(){
        const datosValidacion = {
            nombre: this.nombre,
            audioMensajeValidacion: this.audioMensajeValidacion,
            opciones: []
        }
        for (const opcion of this.opcionesValidacion) {
            datosValidacion.opciones.push({
                descripcion: opcion.getDescripcion()
            })
        }
        
        return datosValidacion
    }
    esCorrecta(seleccionOpcion){
        return seleccionOpcion.esCorrecta()
}
}