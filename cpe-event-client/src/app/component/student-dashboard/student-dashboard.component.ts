import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Student } from '../../class/student';
import { StudentService } from '../../service/student.service';
import { Event } from '../../class/event';
import { Admin } from '../../class/admin';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  private events: Event;
  private noOfStudent: Number;

  constructor(private admin: AdminService, private router: Router, private eventServices: EventService, private studentServices: StudentService) { }

  ngOnInit() {
    this.eventServices.getAllEvent().subscribe(data => {
      this.events = data;
      console.log(data);
    }, error => console.log(error));
  }

  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  adminLoginPage() {
    this.router.navigate(['loginAdmin']);
  }

  aboutPage() {
    this.router.navigate(['about']);
  }

  signUpAttendees(event) {
    this.events = event;
    
    this.eventServices.getEventStatus(this.events.eventId).subscribe(data => {
      if (data == false) {
        console.log('Close');
        this.router.navigate(['closeEvent']);
        this.eventServices.deleteEvent(this.events.eventId).subscribe(data=> {
          console.log('Deleted');
        }, error=>console.log(error));
      } else {
        console.log('Open');
      }
    }, error => console.log(error))

    let student = new Student;
    this.router.navigate(['updateStudent']);
    this.eventServices.setter(event);
    this.studentServices.setter(student);
  }
}
