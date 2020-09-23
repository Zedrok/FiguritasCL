import { Component } from '@angular/core';
import { figurita } from './models/figurita.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Figuritas-CL';
  public figuritas: figurita[];
  constructor(){
    this.figuritas = [
      {
        nombre:'string',
        marca:'string' ,
        imgUrl:'string' ,
        medida:'string' ,
        ancho:'string' ,
        origen:'string' 
      }
    ]
  }

}
