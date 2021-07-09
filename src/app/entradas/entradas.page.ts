import { Component, OnInit } from '@angular/core';

import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { ItemService } from '../api/item.service';


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
synch(): void {
  this.entradas = this.itemService.getEntrada();
  console.log(this.entradas);
}
return(): void {
  this.navCtrl.back();
}
navigateToDetail(id: string): void {
  this.rout.navigate(['/item-detail/' + id]);
}


  


}
