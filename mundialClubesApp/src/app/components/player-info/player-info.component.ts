// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// ActivatedRoute para obtener parámetros de la URL, RouterModule para navegación
import { ActivatedRoute, RouterModule } from '@angular/router';
// Servicio personalizado para obtener información de jugadores
import { PlayerService } from '../../services/player.service';

// Interfaz que define la estructura de datos de un jugador
interface Player {
  idPlayer: string;           // ID único del jugador
  strPlayer: string;         // Nombre del jugador
  strTeam: string;           // Equipo actual
  strSport: string;          // Deporte
  strNationality: string;    // Nacionalidad
  dateBorn: string;          // Fecha de nacimiento (formato: YYYY-MM-DD)
  strPosition: string;       // Posición en el campo
  strThumb: string;          // URL de la imagen del jugador
  strCutout: string;         // URL de la imagen del jugador cortada
  strDescriptionEN?: string;  // Descripción en inglés (opcional)
  strDescriptionES?: string;  // Descripción en español (opcional)
}

@Component({
  selector: 'app-player-info',  // Selector del componente
  standalone: true,            // Componente independiente (Angular 17+)
  imports: [
    CommonModule,   // Proporciona directivas comunes como *ngIf, *ngFor
    RouterModule    // Para usar directivas de enrutamiento
  ],
  templateUrl: './player-info.component.html',  // Plantilla HTML
  styleUrls: ['./player-info.component.css']     // Estilos CSS
})
export class PlayerInfoComponent implements OnInit {
  // Almacena la información del jugador o null si no se ha cargado
  player: Player | null = null;
  // Indica si se está cargando la información
  loading = true;
  // Almacena mensajes de error, si los hay
  error: string | null = null;

  // Inyección de dependencias
  constructor(
    private playerService: PlayerService,  // Servicio para obtener datos del jugador
    private route: ActivatedRoute           // Para acceder a los parámetros de la ruta
  ) {}

  // Método del ciclo de vida de Angular que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Suscripción a los cambios en los parámetros de la ruta
    this.route.params.subscribe(params => {
      // Convertir guiones en espacios (ej: 'lionel-messi' -> 'lionel messi')
      const playerName = params['id'].replace(/-/g, ' ');
      // Cargar la información del jugador
      this.loadPlayerInfo(playerName);
    });
  }

  /**
   * Carga la información de un jugador por su nombre
   * @param playerName Nombre del jugador a buscar
   */
  loadPlayerInfo(playerName: string): void {
    // Iniciar estado de carga
    this.loading = true;
    this.error = null;
    
    // Llamar al servicio para obtener la información del jugador
    this.playerService.getPlayerInfo(playerName).subscribe({
      next: (response) => {
        // Verificar si se encontraron resultados
        if (response.player && response.player.length > 0) {
          // Buscar coincidencia exacta o parcial del nombre del jugador
          const foundPlayer = response.player.find(p => 
            p.strPlayer.toLowerCase().includes(playerName.toLowerCase())
          );
          // Usar el jugador encontrado o el primero de la lista
          this.player = foundPlayer || response.player[0];
        } else {
          this.error = 'No se encontró información del jugador';
        }
        // Finalizar estado de carga
        this.loading = false;
      },
      error: (err) => {
        // Manejo de errores
        console.error('Error al cargar la información del jugador:', err);
        this.error = 'Error al cargar la información del jugador';
        this.loading = false;
      }
    });
  }

  /**
   * Calcula la edad a partir de una fecha de nacimiento
   * @param birthDate Fecha de nacimiento en formato YYYY-MM-DD
   * @returns Edad en años
   */
  getAge(birthDate: string): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    
    // Calcular la diferencia de meses
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    // Ajustar la edad si aún no ha pasado el cumpleaños este año
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return age;
  }
}
