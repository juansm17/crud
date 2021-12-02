import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  getPersona(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarPersona(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPersona(persona: persona): Observable<any> {
    return this.http.post(this.url, persona);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
