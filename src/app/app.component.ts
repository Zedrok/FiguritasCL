import { Component } from '@angular/core';
import { Figurita } from './models/figurita.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Figuritas-CL';
  public figuritas: Figurita[];
  constructor(){
    this.figuritas = [
      {
        nombre: 'string',
        marca: 'string' ,
        imgUrl: 'string' ,
        medida: 'string' ,
        ancho: 'string' ,
        origen: 'string',
      }
    ];
  }

}
