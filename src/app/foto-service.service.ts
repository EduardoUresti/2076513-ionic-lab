import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {


 


  constructor() { }


  public async addNewToGallery() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
 
      const savedFile = await this.savePicture(capturedPhoto);
 
      console.log('File saved at:', savedFile.filepath);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
 
  private async savePicture(cameraPhoto: any) {
    const base64Data = await this.readAsBase64(cameraPhoto);
 
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });
 
    const path = savedFile.uri;
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath,
    };
  }
 
  private async readAsBase64(cameraPhoto: any): Promise<string> {
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();
 
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          resolve(result);
        } else {
          reject(new Error('Failed to read photo as base64.'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }}
