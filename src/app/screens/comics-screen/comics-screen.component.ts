import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-comics-screen',
  templateUrl: './comics-screen.component.html',
  styleUrls: ['./comics-screen.component.css']
})
export class ComicsScreenComponent implements OnInit {

  public producto: Product[];

  constructor() {
    this.producto = [
      {
        nombre: 'Spider man',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Iron man',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '91990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Hulk',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '31990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Fury',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '1990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Groot',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Capitan america',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
      }
    ];
  }

  ngOnInit(): void {
  }

}
