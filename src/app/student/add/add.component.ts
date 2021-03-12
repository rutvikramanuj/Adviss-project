import { Component, OnInit,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
@Input() cardName
  constructor() { }

  ngOnInit(): void {
  }

 
}
