import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Pedido } from '../modelos/pedido';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/Pedidos"

  getPedido(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.url}/${id}`)
  }
  getCarrito(uid:number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.url}/cliente/${uid}`)  //No confirmado
  }
  getPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url)
  }
  getCompras(uid:number):Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/compras/${uid}`)  //Entregados
  }

  altaPedido(nuevoPedido: Pedido): Observable<any> {
    return this.http.post<Pedido>(this.url, nuevoPedido, httpOptions)
  }

  bajaPedido(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarPedido(updPedido: Pedido):Observable<any>{
    return this.http.put<Pedido>(this.url, updPedido, httpOptions)
  }
}