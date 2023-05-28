// import { getDescripcion } from "./opcionvalidacion.js"

class Validacion{
    constructor(audioMensajeValidacion,nombre,opcionesValidacion){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
        this.opcionesValidacion = opcionesValidacion;
    }
    getValidacion(){
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
    esCorrecta(){

    }
}

export default Validacion