import { ItemProducto } from "./ItemProducto"
import { Direccion } from "./direccion"
import { Ronda } from "./ronda"
import { Usuario } from "./usuario"

export class Pedido{
        id?: number
        enable: boolean = true
        confirmado: boolean = false
        entregado: boolean = false
        forma_entrega: string = "Domicilio"
        hora_inicio?: Date
        hora_fin?: Date
        preciototal: number = 0
        usuario?: Usuario
        direccion?: Direccion
        ronda?: Ronda
        productos:ItemProducto[]=[]
}