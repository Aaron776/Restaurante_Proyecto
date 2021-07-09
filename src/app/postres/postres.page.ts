import {Component, OnInit } from '@angular/core';
import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ItemService} from '../api/item.service';

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
    this.postres = this.itemService.getPostre();
    console.log(this.postres);
  }
  
  return(): void {
    this.navCtrl.back();
  }
  navigateToDetail(id: string): void {
    this.rout.navigate(['/item-detail/' + id]);
  }
  

}

