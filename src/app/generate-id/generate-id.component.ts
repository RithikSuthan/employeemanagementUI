import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-generate-id',
  templateUrl: './generate-id.component.html',
  styleUrls: ['./generate-id.component.scss']
})
export class GenerateIdComponent implements OnInit {


  @Input() employeeuuid:any;
  loadObject:any;
  constructor(private employee:EmployeeService) { }


  ngOnInit(): void {
            this.employeeuuid="4c92cf97-7034-466c-ac5e-e1f519f79def"
            this.employee.editFetchEmployee(this.employeeuuid).subscribe(
              (response)=>
                {
                    // alert(response['employeeName']);
                    this.loadObject=response;
                },
                (error)=>
                  {
                      alert(error['error']);
                  }
            )
  }
  saveAsPDF(): void {

    // Initialize jsPDF
    const doc = new jsPDF();

    // Get the HTML content of the card
    const cardContainer = document.getElementById('id-card-container');
    
    // Check if the cardContainer exists
    if (cardContainer) {
      const cardHTML = cardContainer.innerHTML;

      // Convert HTML to PDF
      doc.html(cardHTML, {
        callback: function (pdf) {
          // Save the PDF
          pdf.save('id_card.pdf');
        }
      });
    } else {
      console.error('Card container not found!');
    }
  }

  close()
  {
    
  }
}
