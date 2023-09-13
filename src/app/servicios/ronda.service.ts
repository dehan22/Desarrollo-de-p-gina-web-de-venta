import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ronda } from '../modelos/ronda';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
 };

@Injectable({
  providedIn: 'root'
})
export class RondaService {
  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/Trabajo/api/Rondas"

  getRonda(id:number):Observable<Ronda>{
    return this.http.get<Ronda>(`${this.url}/${id}`)
  }
  getRondas():Observable<Ronda[]>{
    return this.http.get<Ronda[]>(this.url)
  }
  getRondaActual():Observable<Ronda>{
    return this.http.get<Ronda>(`${this.url}/actual`)
  }

  altaRonda(nuevaRonda: Ronda): Observable<any> {
    return this.http.post<Ronda>(this.url, nuevaRonda, httpOptions)
  }

  bajaRonda(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarRonda(updRonda: Ronda):Observable<any>{
    return this.http.put<Ronda>(this.url, updRonda, httpOptions)
  }
}
