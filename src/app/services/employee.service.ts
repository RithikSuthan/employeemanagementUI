import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from 'src/Constants/Endpoints';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee_service_url:any;
  constructor(private http:HttpClient) {
    this.employee_service_url=environment.employee_service_url;
   }

  login(postObj:any):Observable<any>
  {
      const url=this.employee_service_url+EndPoints.login;
      return this.http.post<any>(url,postObj);
  }
}
