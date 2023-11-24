export class Restaurante{
    id: number;
    nombre: string;
    pais: string;
    tipoDeComida: string;
    fundacion: number;
    constructor(id:number, nombre:string, pais:string, tipoDeComida:string, fundacion:number){
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
        this.tipoDeComida = tipoDeComida;
        this.fundacion = fundacion;
    }
}