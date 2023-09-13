import { Rubro } from "./rubro"
import { Usuario } from "./usuario"

export class Producto{
    id?: number
    enable: boolean = true
    nombre: string = ""
    precio_unitario: number = 0
    stock: number = 0
    descripcion: string = ""
    calificacion?: number
    productor: Usuario = new Usuario
    rubro: Rubro = new Rubro
} 