import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { Product } from '../../models/product.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-carrito]',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  public productosEnCarrito = [];
  public totalCarrito: number;



  constructor(private msg: MessengerService){
    this.totalCarrito = 0;
  }

  ngOnInit(): void {
    this.msg.getMsg().subscribe( (producto: ProductoCarrito) => {
      this.agregarProductoAlCarrito(producto);
    });
  }

  agregarProductoAlCarrito(productoAgregado: ProductoCarrito): void{
    console.log(productoAgregado);
    this.productosEnCarrito.push({
      _id: productoAgregado._id,
      nombre: productoAgregado.nombre,
      precio: productoAgregado.precio,
      cantidad: 1,
    });

    this.productosEnCarrito.forEach( (producto: ProductoCarrito) => {
      console.log(producto);
      this.totalCarrito += producto.cantidad * producto.precio;
    });
  }
}
