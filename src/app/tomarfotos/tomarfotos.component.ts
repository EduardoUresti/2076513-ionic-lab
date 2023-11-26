import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tomar-fotos',
  template: `
    <ion-button (click)="takePhoto()">Tomar Foto</ion-button>
  `,
})
export class TomarfotosComponent {

  constructor(private router: Router) {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      const savedImage = await this.saveImage(image);

      this.router.navigate(['/publicarfoto'], { state: { photo: savedImage } });
    } catch (error: any) {
      console.error('Error al capturar la imagen', error);
    }
  }

  async saveImage(image: any) {
    try {
      const base64Data = await this.readAsBase64(image.path);
      const fileName = new Date().getTime() + '.jpeg';

      const savedImage = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
      });

      return savedImage.uri;
    } catch (error) {
      console.error('Error al guardar la imagen', error);
      throw error;
    }
  }

  async readAsBase64(path: string) {
    try {
      const file = await Filesystem.readFile({
        path,
        directory: Directory.Data,
      });

      return file.data;
    } catch (error) {
      console.error('Error al leer la imagen', error);
      throw error;
    }
  }
}