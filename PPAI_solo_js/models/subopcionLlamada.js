import { getValidaciones } from "./validacion.js"

export class subOpcionLlamada{
    constructor(nombre, nroOrden,validacionesRequeridas){//validaciones requeridas tiene que ser un array de validaciones, cada una con los datos propios
        this.nombre = nombre;
        this.nroOrden = nroOrden;
        this.validacionesRequeridas = validacionesRequeridas

    }
    getDatosValidaciones(){
        const validaciones = []
        for (const validaciones of this.validacionesRequeridas){
        validaciones.push(validacion.getValidaciones()) 
        }
        return validaciones // Cada item dentro de validaciones es un objeto con los datos de la validacion, a su vez cada validacione tiene opciones
    }
    esCorrecta(){

    }

}
