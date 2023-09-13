import { Pedido } from "./pedido"

export class Ronda{
        id?: number
        enable: boolean = true
        f_inicio: string = ""
        f_fin: string = ""
        f_retiro_inicio: String = ""
        f_retiro_fin: String = ""
        listadepedidos: Pedido[] = []
}