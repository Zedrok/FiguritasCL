import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-anime-screen',
  templateUrl: './anime-screen.component.html',
  styleUrls: ['./anime-screen.component.css']
})
export class AnimeScreenComponent implements OnInit {

  public producto : product[];

  constructor() { 
    this.producto= [
      {
        nombre:'Cooler',
        marca:'Tamashii nations' ,
        imgUrl:'/assets/producto-anime/anime1.jpg',
        precio:'95.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre:'Son Goku',
        marca:'Tamashii nations' ,
        imgUrl:'/assets/producto-anime/anime2.jpg',
        precio:'75.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre:'Naruto Uzumaki',
        marca:'Tamashii nations' ,
        imgUrl:'/assets/producto-anime/anime3.jpg',
        precio:'45.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre:'Red Riot',
        marca:'Bandai' ,
        imgUrl:'/assets/producto-anime/anime4.jpg',
        precio:'25.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre:'Jiren',
        marca:'Tamashii nations' ,
        imgUrl:'/assets/producto-anime/anime5.jpg',
        precio:'29.990' ,
        descripcion: 'Figura de accion' ,
      },
      {
        nombre:'Roronoa Zoro',
        marca:'Banpresto' ,
        imgUrl:'/assets/producto-anime/anime6.jpg',
        precio:'35.990' ,
        descripcion: 'Figura de accion' ,
      }
    ]
  }

  ngOnInit(): void {
  }

}
