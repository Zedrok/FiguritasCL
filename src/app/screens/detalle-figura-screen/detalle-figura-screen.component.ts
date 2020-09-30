import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { MessengerService } from '../../services/messenger/messenger.service';
import { CarroComprasScreenComponent } from '../carro-compras-screen/carro-compras-screen.component';


@Component({
  selector: 'app-detalle-figura-screen',
  templateUrl: './detalle-figura-screen.component.html',
  styleUrls: ['./detalle-figura-screen.component.css']
})
export class DetalleFiguraScreenComponent implements OnInit {
  private id: string ;
  public product: Product ;

  constructor(
    private productService: ProductService,
    private activatedRouted: ActivatedRoute,
    private msg: MessengerService
    ) {
   }


  ngOnInit(): void {
    this.id = this.activatedRouted.snapshot.params.id;
    this.product = this.productService.getByID(this.id) ;
    console.log(this.product.nombre);
    console.log(this.product.descripcion);
    console.log(this.product.imgUrl);
    console.log(this.product.marca);
    console.log(this.product.precio);

    this.msg.getMsg().subscribe( (producto) => {
      console.log(producto);
      });
    }

    // tslint:disable-next-line: typedef
  datosAgregarAlCarrito(){
    this.msg.sendMsg(this.product);
  }
}
