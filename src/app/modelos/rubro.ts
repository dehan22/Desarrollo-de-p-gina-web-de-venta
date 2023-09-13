import { Producto } from "./producto"

export class Rubro{
    id?: number
    enable: boolean = true
    nombre: string = ""
    descripcion: string = ""
    productos: Producto[]=[]
}  