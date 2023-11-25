import { Injectable } from '@angular/core';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraPhoto {
  private capturedImage: Photo | null = null;

  setCapturedImage(image: Photo) {
    this.capturedImage = image;
  }

  getCapturedImage(): Photo | null {
    return this.capturedImage;
  }
}