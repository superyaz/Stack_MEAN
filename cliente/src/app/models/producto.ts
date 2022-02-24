export class producto {
    _id?: Number;
    nombre: String;
    categoria: String;
    ubicacion: String;
    precio: Number;

    constructor(nombre: String, categoria:String, ubicacion:String, precio:Number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}
