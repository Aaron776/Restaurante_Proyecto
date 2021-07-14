import { Component, OnInit } from '@angular/core';

import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import { ItemService } from '../service/item.service';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  public entradas: ItemModel[];
  constructor(private itemService:ItemService,private rout: Router,private navCtrl: NavController) { 
    
  
}

 ngOnInit() {
  this.synch();
}

return(): void {
  this.navCtrl.back();
}
synch(): void {
  this.itemService.getByCategory('entrada').subscribe(
    response => {
        this.entradas = response;
        console.log('-->'+response);
}
);
}

navigateToDetail(item: ItemModel): void {
   
  this.rout.navigate(['/item-detail/' + item._id]);
}


  


}
