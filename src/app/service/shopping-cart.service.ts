import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItemModel } from 'src/app/models/shopping-item.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingItemModel[] = [];
  private api ='http://localhost:3000/shopping-cart';
  constructor(private http: HttpClient) { 

  }
  addProduct(item: ShoppingItemModel): void {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }
  deleteProduct(position: number): void {
    this.shoppingCart.splice(position, 1);
  }
  getShoppingCartDetail(): ShoppingItemModel[] {
    return this.shoppingCart;
  }
  sendShoppingCart(): Observable<any> {
    console.log(this.shoppingCart);
    return this.http.post(this.api, { shoppingCart: this.shoppingCart }).pipe(
      response => response
    )
  }
  
}
