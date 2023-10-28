import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from '../alumno.model'; 

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: string[] = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  nuevoAlumno: Alumno = new Alumno('', false);

  constructor(public actionSheetController: ActionSheetController) {}

  addToFavorites(alumno: string) {
    // Lógica para agregar a favoritos aquí
    console.log(`Agregado a favoritos: ${alumno}`);
  }

  async showActionSheet(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.removeAlumno(alumno);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  removeAlumno(alumno: string) {
    // Lógica para eliminar al alumno aquí
    const index = this.alumnos.indexOf(alumno);
    if (index > -1) {
      this.alumnos.splice(index, 1);
    }
  }
}