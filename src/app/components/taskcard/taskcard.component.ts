import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.scss']
})
export class TaskcardComponent implements OnInit {
  @Input() cardData:any;
  @Output() refresh=new EventEmitter();
  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
  }
  updateWorkStatus(cardData:any,status:any)
  {
      try
      {
          this.employee.updateWorkStatus(cardData,status).subscribe((response)=>{
            this.refresh.emit(true);
            console.log(response);
          });
      }
      catch(error)
      {
          console.error(error);
      }
  }

deleteTask(cardData:any)
{
    try
    {
        this.employee.deleteTask(cardData).subscribe((response)=>{
          this.refresh.emit(true);
          console.log(response);
        });
    }
    catch(error)
    {
        console.error(error);
    }
}
}