export class CambioEstado {
    constructor(fechaHoraInicio, fechaHoraFin, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
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