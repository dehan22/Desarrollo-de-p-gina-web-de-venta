import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  //'Authorization': 'my-auth-token'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080/Trabajo/api/Usuarios"
  private userData: Usuario = new Usuario;
 
  setUserData(data: Usuario): void {
    this.userData = data;
    sessionStorage.setItem('user', JSON.stringify(this.userData));
  }

  getUserData(): Usuario {
    const user = sessionStorage.getItem('user');
    if (user !== null) {
      this.userData = JSON.parse(user);
    }
    return this.userData;
  }

  login(email:String, clave:String):Observable<any>{
    const datos = { email: email, clave: clave };
    return this.http.post(`${this.url}/login`, datos, httpOptions);
  }
  getUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
  getProductores():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/productores`);
  }

  altaUsuario(nuevoUser: Usuario): Observable<any> {
    return this.http.post<Usuario>(this.url, nuevoUser, httpOptions)
  }

  bajaUsuario(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarUsuario(updUser: Usuario):Observable<any>{
    return this.http.put<Usuario>(this.url, updUser, httpOptions)
  }
}
