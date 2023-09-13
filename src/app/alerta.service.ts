import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  mostrarMensaje (mensaje:string){
    alert (mensaje);
  }
}
