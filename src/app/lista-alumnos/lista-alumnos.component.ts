import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from '../alumno.model'; 

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {

  nuevoAlumno: Alumno = new Alumno('', false);
  alumnos: Alumno[] = [];
  
  agregarAlumno() {
    if (this.nuevoAlumno.nombre) {
      this.alumnos.push(this.nuevoAlumno);
      this.nuevoAlumno = new Alumno('', false);
    }
  }
}