import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ProductosComponent } from '../productos/productos.component';
import { ProductodetalleComponent } from '../productodetalle/productodetalle.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { RouterModule } from '@angular/router';
import { TomarfotosComponent } from '../tomarfotos/tomarfotos.component';
import { PublicarFotoComponent } from '../publicarfoto/publicarfoto.component';
import { TomFotoComponent } from '../tomfoto/tomfoto.component';
import { PubfotoComponent } from '../pubfoto/pubfoto.component';
import { ShowphotosComponent } from '../showphotos/showphotos.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule,
  ],
  declarations: [HomePage, ProductosComponent, ProductodetalleComponent, ListaAlumnosComponent, TomarfotosComponent, PublicarFotoComponent, TomFotoComponent, PubfotoComponent, ShowphotosComponent]
})
export class HomePageModule {}
