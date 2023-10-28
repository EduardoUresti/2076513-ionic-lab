import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ProductosComponent } from '../productos/productos.component';
import { ProductodetalleComponent } from '../productodetalle/productodetalle.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProductosComponent, ProductodetalleComponent, ListaAlumnosComponent]
})
export class HomePageModule {}
