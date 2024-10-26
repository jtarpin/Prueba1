import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgMaterialModule } from '../../shared/material/ng-material.module';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private apiUrl = 'http://localhost:3011/api'; // Cambia según tu configuración
  User: any[] = [];

  @Output() UserChange = new EventEmitter<any[]>();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(): void {
    this.getUser().subscribe(
      (data) => {
        this.User = data;
        this.UserChange.emit(this.User);
      },
      (error) => {
        console.error('Error al cargar Operario', error);
      }
    );
  }

  getUser(): Observable<any[]> {
    const token = this.cookieService.get('token'); // Obtener el token de la cookie
    return this.http.get<any[]>(`${this.apiUrl}/user`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true
    });
}

}

