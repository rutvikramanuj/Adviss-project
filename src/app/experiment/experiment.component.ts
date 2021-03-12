import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {
visibleMe = false;
imgClass1 = 'assets/images/1.jpg';
imgClass2 = 'assets/images/2.jpg';
imgClass3 = 'assets/images/3.jpg';

  constructor() { }

  ngOnInit() {
  }
 
  visibleFunction() {
    this.visibleMe = !this.visibleMe;
  }
}
