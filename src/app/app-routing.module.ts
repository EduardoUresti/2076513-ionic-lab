import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'productos/:id', // :id es un marcador de posición para el ID del producto
    component: ProductodetalleComponent,
  },
  {
    path: '', // Ruta predeterminada
    redirectTo: '/productos',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
