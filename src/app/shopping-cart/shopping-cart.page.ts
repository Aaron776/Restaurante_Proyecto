import { Component, OnInit } from '@angular/core';
import {ShoppingItemModel} from '../models/shopping-item.model';
import {ShoppingCartService} from '../service/shopping-cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  public shoppingCart: ShoppingItemModel[];
  constructor(public alertController: AlertController,private shoppingCartService: ShoppingCartService) { 

  }
  async presentAlert(messageString: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: messageString,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    this.synch();
  }
  synch(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCartDetail();
    console.log(this.shoppingCart);
  }
  delete(position: number): void {
    this.shoppingCartService.deleteProduct(position);
    this.synch();
  }
  
  

}
