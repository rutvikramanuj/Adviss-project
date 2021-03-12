import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  imgClass1 = 'assets/images/1.jpg';
  imgClass2 = 'assets/images/2.jpg';
  imgClass3 = 'assets/images/3.jpg';
  
  constructor(){

  }
  ngOnInit(): void {
  }
  
}
