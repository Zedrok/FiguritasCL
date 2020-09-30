import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';

@Component({
  selector: 'app-carro-compras-screen',
  templateUrl: './carro-compras-screen.component.html',
  styleUrls: ['./carro-compras-screen.component.css']
})
export class CarroComprasScreenComponent implements OnInit {

  public productosEnCarrito: ProductoCarrito[];
  public totalCarrito: number;

  constructor(){
    this.totalCarrito = 0;
  }

  ngOnInit(): void {
    this.productosEnCarrito = [{
        _id: 1,
        nombre: 'Son Goku',
        cantidad: 1,
        precio: 95990 ,
      },
      {
        _id: 2,
        nombre: 'Jiren',
        cantidad: 1,
        precio: 29990,
      },
    ];

    this.productosEnCarrito.forEach( productoEnCarrito => {
      this.totalCarrito += (productoEnCarrito.cantidad * productoEnCarrito.precio );
    });
  }
}
