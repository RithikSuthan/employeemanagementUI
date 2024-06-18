import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerateIdComponent } from './generate-id/generate-id.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeehomeComponent } from './components/employeehome/employeehome.component';
import { LeaveComponent } from './components/leave/leave.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskcardComponent } from './components/taskcard/taskcard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    GenerateIdComponent,
    HeaderComponent,
    EmployeehomeComponent,
    LeaveComponent,
    TasksComponent,
    TaskcardComponent,
    ChatbotComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule 
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
