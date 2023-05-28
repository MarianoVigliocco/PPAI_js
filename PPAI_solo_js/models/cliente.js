export class Cliente{ //cliente terminado
    constructor(dni, nombreCompleto, nroCelular, info){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
        this.info= info
    }
    esTuDni(dniAComparar){
        return this.dni === dniAComparar
    }
    getNombre(){
        return this.nombreCompleto
    }
}