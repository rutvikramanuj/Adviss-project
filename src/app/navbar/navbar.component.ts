import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isCollapsed = false;
  constructor() { } 

  ngOnInit(): void {
  }
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
}
 