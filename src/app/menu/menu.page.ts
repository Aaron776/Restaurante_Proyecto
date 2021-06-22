import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  constructor(private rout: Router) { }

  ngOnInit() {
    
  }
  navigateToEntradas() {
    this.rout.navigate(['/entradas'])
  }
  navigateToPostres() {
    this.rout.navigate(['/postres'])
  }
  navigateToBebidas() {
    this.rout.navigate(['/bebidas'])
  }
  navigateToPLatosFuertes() {
    this.rout.navigate(['/platos-fuertes'])
  }


  
}
