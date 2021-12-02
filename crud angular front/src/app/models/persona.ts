export class persona {
    _id?: number;
    nombre: string;
    apellido: string;
    sexo: string;
    cedula: number;

    constructor(nombre: string, apellido: string, sexo: string, cedula: number ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.cedula = cedula;
    }
}