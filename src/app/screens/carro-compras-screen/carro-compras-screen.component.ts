import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { MessengerService } from '../../services/messenger/messenger.service';

@Component({
  selector: 'app-carro-compras-screen',
  templateUrl: './carro-compras-screen.component.html',
  styleUrls: ['./carro-compras-screen.component.css']
})

export class CarroComprasScreenComponent implements OnInit {

  public productosEnCarrito: ProductoCarrito[];
  public totalCarrito: number;

  constructor(private msg: MessengerService){
    this.totalCarrito = 0;
  }

  ngOnInit(): void {
  }
}
