import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  company:any;
  employeeName:any;
  constructor() { }

  ngOnInit(): void {
    this.company=localStorage.getItem('company');
    this.employeeName=localStorage.getItem('name');
  }

}
