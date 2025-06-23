import { Component } from '@angular/core';
import { listaClubes } from './clubes.mocks';

// import listaProductos

@Component({
  selector: 'app-clubes',
  imports: [],
  templateUrl: './clubes.component.html',
  styleUrl: './clubes.component.css'
})
export class ClubesComponent {

  //propiedad mia del componente para guardar lo que importe
 // listaDeProductos= listaProductos
  listaClubes = listaClubes;

  
}
