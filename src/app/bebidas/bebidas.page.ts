import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ItemModel} from 'src/app/models/item.model';
import { ItemService } from '../api/item.service';



@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
  public bebidas: ItemModel[];
  constructor(private itemService: ItemService,private rout: Router,private navCtrl: NavController) { }

  ngOnInit() {
    this.synch();
}
synch(): void {
  this.bebidas = this.itemService.getBebida();
  console.log(this.bebidas);
}
  return(): void {
    this.navCtrl.back();
  }
  navigateToDetail(id: string): void {
    this.rout.navigate(['/item-detail/' + id]);
  }
  
  


}
