import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-publicarfoto',
  templateUrl: './publicarfoto.component.html',
  styleUrls: ['./publicarfoto.component.scss']
})
export class PublicarFotoComponent implements OnDestroy {
  image: string | undefined;
  caption: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const { photo } = navigation?.extras.state;
      this.image = photo;
    }
  }

  ngOnDestroy() {

    }

  async publish() {
    console.log('Imagen publicada:', this.image);
    console.log('Leyenda:', this.caption);
    this.router.navigate(['/home']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}