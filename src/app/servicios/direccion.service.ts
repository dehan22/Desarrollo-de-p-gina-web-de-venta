import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direccion } from '../modelos/direccion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/Direcciones"

  getDireccion(id:number):Observable<Direccion>{
    return this.http.get<Direccion>(`${this.url}/${id}`)
  }

  getDireccionesPunto():Observable<Direccion[]>{
    return this.http.get<Direccion[]>(`${this.url}/puntos`)
  }
  
  getDireccionesCliente(uid:number):Observable<Direccion[]>{
    return this.http.get<Direccion[]>(`${this.url}/cliente/${uid}`)
  }

  altaDireccion(nuevoPedido: Direccion): Observable<any> {
    return this.http.post<Direccion>(this.url, nuevoPedido, httpOptions)
  }

  bajaDireccion(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarDireccion(updPedido: Direccion):Observable<any>{
    return this.http.put<Direccion>(this.url, updPedido, httpOptions)
  }
}
