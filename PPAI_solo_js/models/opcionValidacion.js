export class OpcionValidacion{
    constructor(correcta, descripcion){
        this.correcta = correcta;
        this.descripcion = descripcion;
    }

    getDescripcion(){
        return this.descripcion
    }

    esCorrecta(array, correcto){ 
        if (correcta) {
            return true
        }
        return null
    }
    setDescripcion(desc){
        this.descripcion = desc
    }
    
}
