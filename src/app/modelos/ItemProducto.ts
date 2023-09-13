import { Pedido } from "./pedido"
import { Producto } from "./producto"

export class ItemProducto{
    id?: number
    enable: boolean = true
    precio_total: number = 0
    cantidad: number = 0
    pedido: Pedido = new Pedido
    producto: Producto = new Producto
} 