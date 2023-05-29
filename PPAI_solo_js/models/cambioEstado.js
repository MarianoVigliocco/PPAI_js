export class CambioEstado {
    constructor(fechaHoraInicio, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.estado = estado
    }
    esEstadoInicial(){

    }
    
    getFechaHoraInicio(){
        return this.fechaHoraInicio
    }
    getNombreEstado(){
        return this.estado.nombre
    }
}