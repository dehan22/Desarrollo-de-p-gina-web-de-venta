import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PuntoRetiro } from '../modelos/puntoRetiro';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'my-auth-token'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class PuntoRetiroService {
  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/PuntosRetiro"

  getPunto_retiro(id:number):Observable<PuntoRetiro>{
    return this.http.get<PuntoRetiro>(`${this.url}/${id}`)
  }
  
  getPuntos_retiro():Observable<PuntoRetiro[]>{
    return this.http.get<PuntoRetiro[]>(this.url)
  }

  altaPunto_retiro(nuevoPedido: PuntoRetiro): Observable<any> {
    return this.http.post<PuntoRetiro>(this.url, nuevoPedido, httpOptions)
  }

  bajaPunto_retiro(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarPunto_retiro(updPedido: PuntoRetiro):Observable<any>{
    return this.http.put<PuntoRetiro>(this.url, updPedido, httpOptions)
  }
}
