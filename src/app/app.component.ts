import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adviss';
  loadedFeature='';
  
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
}
