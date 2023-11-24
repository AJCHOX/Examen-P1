import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fechaNacimiento: String='';

  constructor() {}
  enviarDatos() {
    // Aquí puedes manejar la lógica para enviar los datos
    console.log('Datos enviados:');
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
  }
}
