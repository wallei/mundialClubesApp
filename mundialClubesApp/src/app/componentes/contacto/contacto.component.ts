import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

export class ContactoComponent {

  usuario = {
    nombre:'',
    email:'',
    fanDe:'',
  };

  enviar() {
    console.log('Formulario enviado:', this.usuario)
  }


}
