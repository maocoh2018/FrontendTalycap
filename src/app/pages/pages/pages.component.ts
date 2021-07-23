import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent  {

  open:boolean = false;

  constructor() { }

  openSidebar(valor:any){    
    this.open = valor
  }

}
