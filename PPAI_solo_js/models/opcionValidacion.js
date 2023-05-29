class OpcionValidacion{
    constructor(correcta, descripcion){
        this.correcta = correcta;
        this.descripcion = descripcion;
    }

    getDescripcion(){
        return this.descripcion
    }

    esCorrecta(){ 
        if (this.correcta) {
            return true
        }
        return false
    }
    setDescripcion(desc){
        this.descripcion = desc
    }
    
}

export default OpcionValidacion