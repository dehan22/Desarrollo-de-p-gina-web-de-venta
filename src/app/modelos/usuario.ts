export class Usuario{
    id?: number
    tipo_usuario: string = "Invitado"   //Invitado--Cliente--Administrador--Productor
    nombre: string = ""
    apellido: string = ""
    email: string = ""
    telefono: number= 0;
    nom_usuario: string = ""
    clave: string = ""
    enable: boolean = true
    descripcion: string = ""
    direcciones: [] = []
    productos: [] = []               //Del Productor
    dni: number = 0
}