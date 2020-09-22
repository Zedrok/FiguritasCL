import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcComponent } from './components/dc/dc.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PrincipalComponent },
  { path: 'dc', component: DcComponent },
  { path: 'marvel', component: MarvelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
