import { PuntoRetiro } from "./puntoRetiro"
import { Usuario } from "./usuario"

export class Direccion{
    id?: number 
    enable: boolean = true
    calle: string = ""
    calle_1: string = ""
    calle_2: string = ""
    numero: number = 0
    n_dep: string = ""
    ciudad: string = ""
    codigo_postal: number = 0
    barrio: string = ""
    lugar: string = ""
    latitud: number = 0
    longitud: number = 0
    referencia: string = ""
    usuario?: Usuario
    puntoretiro?: PuntoRetiro
} 