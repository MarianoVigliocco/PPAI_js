class Estado{
    constructor(nombre){
        this.nombre = nombre;
    }
    esEnCurso() {
        return this.nombre === "EnCurso";
    }

    esFinalizado(estados){
        return this.nombre === "Finalizada"
    }
}

const enCurso = new Estado("EnCurso")
const finalizada = new Estado("Finalizada")
const iniciada = new Estado("iniciada")

const estados = [iniciada, enCurso, finalizada]
export default estados