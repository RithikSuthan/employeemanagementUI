import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from 'src/Constants/Endpoints';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee_service_url:any;
  email_service_url:any;

  constructor(private http:HttpClient) {
    this.employee_service_url=environment.employee_service_url;
    this.email_service_url=environment.email_service_url;
   }
  login(postObj:any):Observable<any>
  {
      const url=this.employee_service_url+EndPoints.login;
      return this.http.post<any>(url,postObj);
  }
  fetchEmployees():Observable<any>
  {
    const url = `${this.employee_service_url}${EndPoints.fetchEmployee}?company=${localStorage.getItem("company")}&creator=${localStorage.getItem("name")}`;

    // const url=this.employee_service_url+EndPoints.fetchEmployee;
    return this.http.get<any>(url);
  }
  addEmployee(postObj:any):Observable<any>
  {
    const url=this.employee_service_url+EndPoints.addEmployee;
    return this.http.post<any>(url,postObj);
  }
  fetchManagers():Observable<any>
  {
    const url = `${this.employee_service_url}${EndPoints.fetchManager}?company=${localStorage.getItem("company")}&creator=${localStorage.getItem("name")}`;

    return this.http.get<any>(url);
  }
  deleteEmployee(uuidEmployee:any):Observable<any>
  {

    const url=`${this.employee_service_url}${EndPoints.deleteEmployee}?uuid=${uuidEmployee}`
    return this.http.delete<any>(url);
  }

  editFetchEmployee(uuidEmployee: any): Observable<any> {
    const url = `${this.employee_service_url}${EndPoints.findEmployee}?uuid=${uuidEmployee}`;
    return this.http.get<any>(url);
  }
  editEmployee(editObj:any):Observable<any>
  {
      const url=this.employee_service_url+EndPoints.editEmployee;
      return this.http.patch<any>(url,editObj);
  }
  registerEmployee(postObj:any):Observable<any>
  {
      const url=this.employee_service_url+EndPoints.registerEmployee;
      return this.http.put<any>(url,postObj);
  }
  sendOtp(postObj:any):Observable<any>
  {
    const url=this.email_service_url+EndPoints.sendOtp;
    return this.http.post<any>(url,postObj);
  }
  checkExistUser(email:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.existEmail}?email=${email}`;
    return this.http.get<any>(url);
  }
  checkExistEmployee(email:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.existEmailEmployee}?email=${email}`;
    return this.http.get<any>(url);
  }
  sendIdCard(postObj:any):Observable<any>
  {
    const url=this.email_service_url+EndPoints.sendIdCard;
    console.log(url);
    return this.http.post<any>(url,postObj);
  }
  sendLeaveRequest(postObj:any):Observable<any>
  {
    const url=this.employee_service_url+EndPoints.leaveRequest;
    return this.http.post<any>(url,postObj);
  }
  addTask(postObj:any):Observable<any>
  {
    const url=this.employee_service_url+EndPoints.addTask;
    return this.http.post<any>(url,postObj);
  }
  fetchTask(uuid:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.fetchTask}?uuid=${uuid}`;
    return this.http.get(url);
  }
  updateStatus(postObj:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.updateStatus}?uuid=${postObj['uuid']}&taskId=${postObj['taskId']}&status=${postObj['status']}`;
    return this.http.get(url);
  }
  updateWorkStatus(postObj:any,status:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.updateWorkStatus}?uuid=${postObj['uuid']}&taskId=${postObj['taskId']}&workStatus=${status}`;
    return this.http.get(url);
  }
  deleteTask(postObj:any):Observable<any>
  {
    const url=`${this.employee_service_url}${EndPoints.deleteTask}?uuid=${postObj['uuid']}&taskId=${postObj['taskId']}`;
    return this.http.delete(url);
  }
  fetchManagersEmployee():Observable<any>
  {
    const url = `${this.employee_service_url}${EndPoints.fetchManager}?company=${localStorage.getItem("company")}&creator=${localStorage.getItem("creator")}`;

    return this.http.get<any>(url);
  }
  
}
