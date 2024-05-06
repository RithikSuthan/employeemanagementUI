import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input()employeeName:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="none";
    }
  }
  signOut()
  {
    this.router.navigateByUrl("/");
  }
  onMouseEnter()
  {
    console.log("Camehere");
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="block";
    }
  }
  onMouseLeave()
  {
    console.log("mouse leave");
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="none";
    }
  }
}
