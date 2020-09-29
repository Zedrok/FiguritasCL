import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeScreenComponent } from './screens/anime-screen/anime-screen.component';
import { CarroComprasScreenComponent } from './screens/carro-compras-screen/carro-compras-screen.component';
import { ComicsScreenComponent } from './screens/comics-screen/comics-screen.component';
import { CuentaScreenComponent } from './screens/cuenta-screen/cuenta-screen.component';
import { DcScreenComponent } from './screens/dc-screen/dc-screen.component';
import { MarvelScreenComponent } from './screens/marvel-screen/marvel-screen.component';
import { PantallaPrincipalScreenComponent } from './screens/pantalla-principal-screen/pantalla-principal-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  /*{ path: '**', redirectTo: '/inicio', pathMatch: 'full' },*/
  { path: 'inicio', component: PantallaPrincipalScreenComponent },
  { path: 'dc', component: DcScreenComponent },
  { path: 'marvel', component: MarvelScreenComponent },
  { path: 'cuenta', component: CuentaScreenComponent },
  { path: 'carrito', component: CarroComprasScreenComponent },
  { path: 'anime', component: AnimeScreenComponent },
  { path: 'comics', component: ComicsScreenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

