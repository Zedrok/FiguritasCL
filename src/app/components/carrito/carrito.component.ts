import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { MessengerService } from '../../services/messenger/messenger.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  public productosEnCarrito: ProductoCarrito[];
  public totalCarrito: number;

  constructor(private msg: MessengerService){
    this.totalCarrito = 0;
  }

  ngOnInit(): void {
  }
}
