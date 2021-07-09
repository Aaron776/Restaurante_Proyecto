import { Component, OnInit } from '@angular/core';
import {ItemModel} from 'src/app/models/item.model';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ItemService} from '../api/item.service';

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
    this.platos = this.itemService.getPlatosFuerte();
    console.log(this.platos);
  }
  return(): void {
    this.navCtrl.back();
  }
  navigateToDetail(id: string): void {
    this.rout.navigate(['/item-detail/' + id]);
  }
  

}
