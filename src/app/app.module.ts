import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PantallaPrincipalScreenComponent } from './screens/pantalla-principal-screen/pantalla-principal-screen.component';
import { CuentaScreenComponent } from './screens/cuenta-screen/cuenta-screen.component';
import { CarroComprasScreenComponent } from './screens/carro-compras-screen/carro-compras-screen.component';
import { DcScreenComponent } from './screens/dc-screen/dc-screen.component';
import { MarvelScreenComponent } from './screens/marvel-screen/marvel-screen.component';
import { AnimeScreenComponent } from './screens/anime-screen/anime-screen.component';
import { ComicsScreenComponent } from './screens/comics-screen/comics-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PantallaPrincipalScreenComponent,
    CuentaScreenComponent,
    CarroComprasScreenComponent,
    DcScreenComponent,
    MarvelScreenComponent,
    AnimeScreenComponent,
    ComicsScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
