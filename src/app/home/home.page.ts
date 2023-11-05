import { Component } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fotoService: FotoServiceService) { }

    tomarFoto() {
        this.fotoService.addNewToGallery();
    }

}
