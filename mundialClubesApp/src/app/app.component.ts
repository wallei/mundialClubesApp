import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

//inyectar o exportar el servicio, eso hay que hacer siempre.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mundialClubesApp';

  constructor(private _router: Router) {}

  navegarAPartidos(){
    this._router.navigate(['/partidos']);
  }


}
