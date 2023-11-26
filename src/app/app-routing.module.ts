import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import { TomarfotosComponent } from './tomarfotos/tomarfotos.component';
import { PublicarFotoComponent } from './publicarfoto/publicarfoto.component';
import { TomFotoComponent } from './tomfoto/tomfoto.component';
import { PubfotoComponent } from './pubfoto/pubfoto.component';
import { ShowphotosComponent } from './showphotos/showphotos.component'

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
    path: 'productos/:id',
    component: ProductodetalleComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'tomarfotos', component: TomarfotosComponent },
  { path: 'publicarfoto', component: PublicarFotoComponent },
  { path: 'tomfoto', component: TomFotoComponent },
  { path: 'pubfoto', component: PubfotoComponent },
  { path: 'showphotos', component: ShowphotosComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
