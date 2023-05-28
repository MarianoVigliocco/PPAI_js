import { getDescripcion } from "./opcionvalidacion.js"
export class Validacion{
    constructor(audioMensajeValidacion,nombre,opcionesValidacion,tipo){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
        this.opcionesValidacion = opcionesValidacion;
        this.tipo = tipo
    }
    getValidacion(){
        const datosValidacion = {
            nombre: this.nombre,
            tipo: this.tipo,
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
    esCorrecta(){

    }
}