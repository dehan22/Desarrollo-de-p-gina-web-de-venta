import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rubro } from '../modelos/rubro';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class RubroService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/Trabajo/api/Rubros"

  getRubro(id:number):Observable<Rubro>{
    return this.http.get<Rubro>(`${this.url}/${id}`)
  }
  getRubros():Observable<Rubro[]>{
    return this.http.get<Rubro[]>(this.url)
  }

  altaRubro(nuevoRubro: Rubro): Observable<any> {
    return this.http.post<Rubro>(this.url, nuevoRubro, httpOptions)
  }

  bajaRubro(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarRubro(updRubro: Rubro):Observable<any>{
    return this.http.put<Rubro>(this.url, updRubro, httpOptions)
  }

}
