import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import jsPDF from 'jspdf';
import { Output, EventEmitter } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generate-id',
  templateUrl: './generate-id.component.html',
  styleUrls: ['./generate-id.component.scss']
})
export class GenerateIdComponent implements OnInit {


  @Input() employeeuuid:any;
  loadObject:any;
  @Output() close1 =new EventEmitter<any>();
  constructor(private employee:EmployeeService) { }


  ngOnInit(): void {
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
  // saveAsPDF(): void {
  //   // Initialize jsPDF
  //   const doc = new jsPDF();
  
  //   // Get the HTML content of the card
  //   const cardContainer = document.getElementById('id-card-container');
  
  //   // Check if the cardContainer exists
  //   if (cardContainer) {
  //     const cardHTML = cardContainer.innerHTML;
  
  //     // Convert HTML to PDF
  //     doc.html(cardHTML, {
  //       callback: (pdf) => {
  //         // Save the PDF
  //         pdf.save(`${this.loadObject['employeeName']}.pdf`);
  //       }
  //     });
  //   } else {
  //     console.error('Card container not found!');
  //   }
  // }

  saveAsPDF() {
    const element = document.getElementById('id-card-container');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('id-card.pdf');
      });
    } else {
      console.error('Element not found');
    }
  }
  close()
  {
      this.close1.emit();
  }
}
