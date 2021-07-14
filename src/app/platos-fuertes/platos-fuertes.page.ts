import { Component, OnInit } from '@angular/core';
import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import {ItemService} from '../service/item.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-platos-fuertes',
  templateUrl: './platos-fuertes.page.html',
  styleUrls: ['./platos-fuertes.page.scss'],
})
export class PlatosFuertesPage implements OnInit {
  public platos: ItemModel[];
  constructor(private itemService: ItemService,private rout: Router,private navCtrl: NavController) { }

  ngOnInit() {
    this.synch();
  }
  synch(): void {
    this.itemService.getByCategory('plato fuerte').subscribe(
      response => {
          this.platos = response;
          console.log(response);
  }
  );
  }
  
  navigateToDetail(item: ItemModel): void {
    this.rout.navigate(['/item-detail/' + item._id]);
  }

return(): void {
  this.navCtrl.back();
}
  

}
