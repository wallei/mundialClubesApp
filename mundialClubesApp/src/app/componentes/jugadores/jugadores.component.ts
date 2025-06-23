import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { RouterModule } from '@angular/router';

interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
}

interface Equipo {
  id: number;
  nombre: string;
  pais: string;
  liga: string;
  escudo: string;
  dt: string;
  jugadores: Jugador[];
}

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule
  ],
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  equipos: Equipo[] = [];
  equipoSeleccionado: Equipo | null = null;
  mostrarDetalles: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarDatosEquipos();
  }

  cargarDatosEquipos() {
    console.log('Iniciando carga de datos...');
    
    // Usamos el archivo JSON corregido
    this.http.get<{ clubes: Equipo[] }>('assets/data/equipos.json')
      .pipe(
        catchError(error => {
          console.error('Error al cargar los datos:', error);
          return of({ clubes: [] });
        })
      )
      .subscribe({
        next: (data) => {
          console.log('Datos recibidos:', data);
          if (data && data.clubes) {
            this.equipos = data.clubes;
            console.log(`Se cargaron ${this.equipos.length} equipos`);
          } else {
            console.warn('Formato de datos inesperado:', data);
            this.equipos = [];
          }
        },
        error: (error) => {
          console.error('Error en la suscripción:', error);
          this.equipos = [];
        }
      });
  }

  seleccionarEquipo(equipo: Equipo) {
    this.equipoSeleccionado = equipo;
    this.mostrarDetalles = true;
  }

  volverALista() {
    this.mostrarDetalles = false;
    this.equipoSeleccionado = null;
  }
}