import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemModel} from 'src/app/models/item.model';
import { ItemService } from '../service/item.service';
import {NavController} from '@ionic/angular';



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
  this.itemService.getByCategory('bebida').subscribe(
    response => {
        this.bebidas = response;
        console.log(response);
}
);
}
return(): void {
  this.navCtrl.back();
}
navigateToDetail(item: ItemModel): void {
  this.rout.navigate(['/item-detail/' + item._id]);
}
  
  


}
