import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

const httpOptions = {
headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/Productos"

  getProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`)
  }
  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url)
  }

  altaProducto(nuevoPedido: Producto): Observable<any> {
    return this.http.post<Producto>(this.url, nuevoPedido, httpOptions)
  }

  bajaProducto(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarProducto(updPedido: Producto):Observable<any>{
    return this.http.put<Producto>(this.url, updPedido, httpOptions)
  }
}
