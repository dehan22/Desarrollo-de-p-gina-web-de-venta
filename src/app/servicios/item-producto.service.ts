import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProducto } from '../modelos/ItemProducto';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class ItemProductoService {
  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/Items"

  getItemProduto(id:number):Observable<ItemProducto>{
    return this.http.get<ItemProducto>(`${this.url}/${id}`)
  }

  getItemProdutos():Observable<ItemProducto[]>{
    return this.http.get<ItemProducto[]>(this.url)
  }

  getItems(pedidoid:number):Observable<ItemProducto[]>{
    return this.http.get<ItemProducto[]>(`${this.url}/pedido/${pedidoid}`)
  }
  
  altaItemProducto(nuevoItemProducto: ItemProducto): Observable<any> {
    return this.http.post<ItemProducto>(this.url, nuevoItemProducto, httpOptions)
  }

  bajaItemProducto(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarItemProducto(updItemProducto: ItemProducto):Observable<any>{
    return this.http.put<ItemProducto>(this.url, updItemProducto, httpOptions)
  }

  getListadoPorProdctores(productorid:number):Observable<ItemProducto[]>{
    return this.http.get<ItemProducto[]>(`${this.url}/productor/${productorid}`)
  }

  getListadoPorFormaEntrega(tipo_entrega:string):Observable<ItemProducto[]>{
    return this.http.get<ItemProducto[]>(`${this.url}/entrega/${tipo_entrega}`)
  }
}
