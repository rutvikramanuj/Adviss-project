import { Component, Input } from '@angular/core';
import {SingupDataService} from './singup-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slidePageView = true;

  title = 'adviss';
  loadedFeature='';
  condition = true;
  constructor(){
    
  

    
    
  }
  ngOnInit(): void {
    
  }

  @Input() loadPage=true;
  imgClass1 = 'assets/images/1.jpg';
imgClass2 = 'assets/images/2.jpg';
imgClass3 = 'assets/images/3.jpg';
  onNavigate(feature:string){
    this.loadedFeature=feature;
    this.loadPage=false;
    
  }
  onLoadPage(){
    this.loadPage=false;

  }
  carouselView(){
    
    setTimeout(() => {
      this.slidePageView = true;
      console.log(this.slidePageView);
      
      return this.slidePageView;
    }, 5000);
  }
}
