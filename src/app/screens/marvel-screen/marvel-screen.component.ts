import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-marvel-screen',
  templateUrl: './marvel-screen.component.html',
  styleUrls: ['./marvel-screen.component.css']
})
export class MarvelScreenComponent implements OnInit {
  
  
  public producto : product[];

  constructor() {
      this.producto= [
        {
          nombre:'Spider man',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'21990' ,
          descripcion: 'Figura de accion' ,
        },
        {
          nombre:'Iron man',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'91990' ,
          descripcion: 'Figura de accion' ,
        },
        {
          nombre:'Hulk',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'31990' ,
          descripcion: 'Figura de accion' ,
        },
        {
          nombre:'Fury',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'1990' ,
          descripcion: 'Figura de accion' ,
        },
        {
          nombre:'Groot',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'21990' ,
          descripcion: 'Figura de accion' ,
        },
        {
          nombre:'Capitan america',
          marca:'Marvel' ,
          imgUrl:'/assets/Logo-Marvel.png',
          precio:'21990' ,
          descripcion: 'Figura de accion' ,
        }
      ]
    }

  ngOnInit(): void {
  }

}
