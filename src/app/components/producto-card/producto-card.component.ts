import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from '../../services/messenger/messenger.service';


@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  @Input()
  public producto: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
