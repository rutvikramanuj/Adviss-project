import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome-slide.component.html',
  styleUrls: ['./welcome-slide.component.css']
})
export class WelcomeSlideComponent implements OnInit {
  slidePageView = true;
  constructor() { }

  ngOnInit(): void {
  }
  hiddenSlide(){
    
    setTimeout(() => {
      this.slidePageView=false;
    }, 5000);
  }
}
