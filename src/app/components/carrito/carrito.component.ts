import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-carrito]',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  @Input()
  public productoEnCarrito: ProductoCarrito;


  constructor() {
  }

  ngOnInit(): void {
  }


}
