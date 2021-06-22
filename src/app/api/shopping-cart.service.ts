import { Injectable } from '@angular/core';
import {ShoppingItemModel} from '../models/shopping-item.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingItemModel[] = [];

  constructor() { 

  }
  addProduct(item: ShoppingItemModel): void {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }
  getShoppingCartDetail(): ShoppingItemModel[] {
    return this.shoppingCart;
  }
  deleteProduct(position: number): void {
    this.shoppingCart.splice(position, 1);
  }
  
}

