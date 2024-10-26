import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarDatosService {


  baseUrl: string = 'http://localhost:3011';
  

  constructor(private http: HttpClient) { }



  
  enviarFormularioRegistro(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/register`, data);
  }

  
  enviarFormularioLogin(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/login`, data, { withCredentials: true });
  }


}
