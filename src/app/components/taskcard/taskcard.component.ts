import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.scss']
})
export class TaskcardComponent implements OnInit {
  @Input() cardData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
