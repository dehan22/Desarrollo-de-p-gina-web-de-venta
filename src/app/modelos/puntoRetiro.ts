import { Direccion } from "./direccion";

export class PuntoRetiro{
    id?: number
    enable: boolean = true
    nombre: string = ""
    telefono: number= 0;
    direccion: Direccion = new Direccion;
} 