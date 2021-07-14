import {Component, OnInit } from '@angular/core';
import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import {ItemService} from '../service/item.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {
  public postres: ItemModel[];
  constructor(private itemService: ItemService,private rout: Router,private navCtrl: NavController) { 

  }

  ngOnInit() {
    this.synch();
  }
  synch(): void {
    this.itemService.getByCategory('postre').subscribe(
      response => {
          this.postres = response;
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
  



