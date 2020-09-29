import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-dc-screen',
  templateUrl: './dc-screen.component.html',
  styleUrls: ['./dc-screen.component.css']
})
export class DcScreenComponent implements OnInit {

  public productos: Product[];

  constructor() {
    this.productos = [
      {
        nombre: 'Joker',
        marca: 'Diamond' ,
        imgUrl: '/assets/producto-dc/figura1.jpg',
        precio: '40.000' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Batman',
        marca: 'DC Comics' ,
        imgUrl: '/assets/producto-dc/figura2.jpg',
        precio: '20.000' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Superman',
        marca: 'DC Comics' ,
        imgUrl: '/assets/producto-dc/figura3.png',
        precio: '35.000' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Aquaman',
        marca: 'Diamond' ,
        imgUrl: '/assets/producto-dc/figura4.jpg',
        precio: '35.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Black Manta',
        marca: 'Diamond' ,
        imgUrl: '/assets/producto-dc/figura5.jpg',
        precio: '21.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre: 'Wonder Woman',
        marca: 'DC Comics' ,
        imgUrl: '/assets/producto-dc/figura6.jpg',
        precio: '26.990' ,
        descripcion: 'Figura de accion' ,
      }
    ];
  }

  ngOnInit(): void {
  }

}
