export class Clima {

    ubicacion: String;
    grados_c: number;
    estado: string;
    descripcion: string;

    constructor(ubicacion_: string, grados_c_: number, estado_: string, descripcion_: string){
        this.ubicacion = ubicacion_;
        this.grados_c = parseFloat(grados_c_.toFixed(2));
        this.estado = estado_;
        this.descripcion = descripcion_;
    }

}