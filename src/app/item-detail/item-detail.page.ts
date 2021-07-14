import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItemModel } from '../models/item.model';
import { ItemService } from '../service/item.service';
import {ShoppingItemModel} from '../models/shopping-item.model';
import {ShoppingCartService} from 'src/app/service/shopping-cart.service';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public id: string;
  public item: ItemModel;
  public shoppingItem: ShoppingItemModel;

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
    private itemService: ItemService,private shoppingCartService: ShoppingCartService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = {};
    this.shoppingItem = {};
  }

  ngOnInit() {
    this.getItemById();
  }
  
  getItemById(): void {
    if (this.id != null) {
      this.itemService.getById(this.id).subscribe(
        response => {
          console.log(response);
          this.item = response;
          this.shoppingItem.item = this.item;
        }
      );
    }
  }
  agregar(): void {
    this.shoppingCartService.addProduct(this.shoppingItem);
  }

return(): void {
  this.navCtrl.back();
}



}
