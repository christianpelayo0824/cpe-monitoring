import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StudentService } from './service/student.service';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { LoginStudentComponent } from './component/login-student/login-student.component';
import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { AdminService } from './service/admin.service';
import { AdminFormComponent } from './component/admin-form/admin-form.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { EventFormComponent } from './component/event-form/event-form.component';
import { EventService } from './service/event.service';
import { EventListComponent } from './component/event-list/event-list.component';
import { ClosedEventComponent } from './component/closed-event/closed-event.component';
import { SuccessEventComponent } from './component/success-event/success-event.component';
import { StudentFormComponent } from './component/student-form/student-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Student
  { path: 'studentList', component: StudentListComponent },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'updateStudent', component: UpdateStudentComponent },
  { path: 'loginStudent', component: LoginStudentComponent },
  { path: 'studentForm', component: StudentFormComponent },

  // Admin
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'adminForm', component: AdminFormComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },

  // Event
  { path: 'eventForm', component: EventFormComponent },
  { path: 'eventList', component: EventListComponent },
  { path: 'closeEvent', component: ClosedEventComponent },
  { path: 'successEvent', component: SuccessEventComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    UpdateStudentComponent,
    StudentListComponent,
    LoginStudentComponent,
    LoginAdminComponent,
    AdminFormComponent,
    AdminDashboardComponent,
    EventFormComponent,
    EventListComponent,
    ClosedEventComponent,
    SuccessEventComponent,
    StudentFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService, AdminService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
