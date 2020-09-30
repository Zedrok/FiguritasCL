import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  public product: Product 
  public comentario:string ;
  public observableTextArea$:Observable<string> ;

  constructor(
    private productService: ProductService,
    private activatedRouted: ActivatedRoute,
    private msg: MessengerService
    ) {
   }


  ngOnInit(): void {
    this.id = this.activatedRouted.snapshot.params.id;
    this.product = this.productService.getByID(this.id) ;
  }

    datosAgregarAlCarrito(): void{
      this.msg.sendMsg(this.product);
      console.log(this.product);
    }
}
