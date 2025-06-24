// app.routes.ts maneja todas las rutas de la aplicacion.
// las rutas son objetos, primero tienen el path.
// usamos lazy loading para cargar los componentes solo cuando se necesiten.

import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ClubesComponent } from './componentes/clubes/clubes.component';
import { ClubesDetallesComponent } from './componentes/clubes-detalles/clubes-detalles.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { JugadoresDetallesComponent } from './componentes/jugadores-detalles/jugadores-detalles.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./componentes/inicio/inicio.component').then(m => m.InicioComponent) },
   { path: 'clubes', loadComponent: () => import('./componentes/clubes/clubes.component').then(m => m.ClubesComponent) },
   { path: 'clubes/:id', loadComponent: () => import('./componentes/clubes-detalles/clubes-detalles.component').then(m => m.ClubesDetallesComponent) },
   { path: 'contacto', loadComponent: () => import('./componentes/contacto/contacto.component').then(m => m.ContactoComponent) },
   { path: 'jugadores', loadComponent: () => import('./componentes/jugadores/jugadores.component').then(m => m.JugadoresComponent) },
   { path: 'jugadores/:id', loadComponent: () => import('./componentes/jugadores-detalles/jugadores-detalles.component').then(m => m.JugadoresDetallesComponent) },
   { path: 'partidos', loadComponent: () => import('./componentes/partidos/partidos.component').then(m => m.PartidosComponent) },
   { path: 'jugador/:id', loadComponent: () => import('./components/player-info/player-info.component').then(m => m.PlayerInfoComponent) },
   { path: '**', redirectTo: '', pathMatch: 'full' } // redirige a inicio si la ruta no existe

];
