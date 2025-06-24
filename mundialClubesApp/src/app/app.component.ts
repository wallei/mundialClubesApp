// Importaciones necesarias para el componente principal
import { Component } from '@angular/core';
// Router para navegación, RouterLink para enlaces, RouterOutlet para renderizar rutas
import { Router, RouterLink, RouterOutlet } from '@angular/router';
// FormsModule para el manejo de formularios y ngModel
import { FormsModule } from '@angular/forms';

//inyectar o exportar el servicio, eso hay que hacer siempre.

@Component({
  selector: 'app-root',  // Selector del componente raíz
  standalone: true,      // Componente independiente (Angular 17+)
  imports: [
    FormsModule,    // Para formularios y ngModel
    RouterOutlet,   // Para renderizar las rutas
    RouterLink     // Para navegación entre rutas
  ],
  schemas: [],     // Esquemas adicionales (no necesario en este caso)
  templateUrl: './app.component.html',  // Plantilla HTML principal
  styleUrls: ['./app.component.css']     // Estilos CSS del componente
})
export class AppComponent {
  // Título de la aplicación
  title = 'mundialClubesApp';
  
  // Almacena el texto de búsqueda del usuario
  searchQuery: string = '';

  // Inyección del servicio Router para navegación
  constructor(private router: Router) {}

  /**
   * Maneja el evento de búsqueda cuando el usuario envía el formulario
   * @param event Evento del formulario
   */
  onSearch(event: Event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Verificar que el campo de búsqueda no esté vacío
    if (this.searchQuery.trim()) {
      // Navegar a la ruta del jugador, convirtiendo espacios a guiones y a minúsculas
      // Ejemplo: 'Lionel Messi' -> '/jugador/lionel-messi'
      this.router.navigate(['/jugador', this.searchQuery.trim().toLowerCase().replace(/\s+/g, '-')]);
    }
  }

  /**
   * Navega a la sección de partidos
   */
  navegarAPartidos() {
    // Navegar a la ruta de partidos
    this.router.navigate(['/partidos']);
  }


}
