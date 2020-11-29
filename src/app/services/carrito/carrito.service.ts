import { Injectable } from '@angular/core';
import { PRODUCT } from '../product/PRODUCT.const';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos = PRODUCT;
  items: ProductoCarrito[] = [];
  encontrado = false;
  url = 'http://localhost:5000/services/';
  constructor(private http: HttpClient) {
  }

  agregarCarrito(producto): void{
    let encontrado = false;
    this.items.forEach((elemento) => {
    if (elemento._id === producto._id){
        encontrado = true;
        elemento.cantidad += 1;
      }
    });

    if (!this.encontrado) {
      this.items.push({ _id : producto._id, nombre : producto.nombre, precio : producto.precio, cantidad : 1});
    }
  }

  limpiarCarrito(): any[]{
    this.items = [];
    return this.items;
  }

  ListarCarrito(): any[]{
    return this.items;
  }

  GuardarDatos(datos): any{
    return this.http.post('${this.url}guardar.php', JSON.stringify(datos));
  }
}
