import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.scss']
})
export class EmployeehomeComponent implements OnInit {

  company:any;
  employeeName:any;
  constructor() { }

  ngOnInit(): void {
    this.company=localStorage.getItem("company");
    this.employeeName=localStorage.getItem("name");
  }

}
