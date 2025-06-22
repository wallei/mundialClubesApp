import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombre= new FormControl ('');
  email= new  FormControl ('');
  fanaticoDe= new  FormControl ('');

}
