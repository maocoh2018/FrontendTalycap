import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  open:boolean=false;
  @Output('valor') abrirSidebar:EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  opened(){
    //alert('eeee');
    if(this.open == true){
      this.open = false;      
    }else{
      this.open = true;
    }
    this.abrirSidebar.emit(this.open);
  }
}
