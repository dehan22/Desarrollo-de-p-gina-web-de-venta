import { Direccion } from "./direccion";
import { Pedido } from "./pedido";

export class PuntoRetiro{
    id?: number
    enable: boolean = true
    nombre: string = ""
    telefono: number= 0;
    direccion: Direccion = new Direccion;
    pedidos: Pedido[] = []
} 