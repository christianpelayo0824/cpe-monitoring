import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../class/student';
import { Router } from '@angular/router';
import { Event } from '../../class/event';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  private student: Student;
  private event: Event;

  constructor(private studentService: StudentService, private router: Router, private eventServices: EventService) { }

  ngOnInit() {
    this.student = this.studentService.getter();
    this.event = this.eventServices.getter();
  }

  processForm() {
    if (this.student.studentId == undefined) {
      this.student.event = this.event.eventId;
      this.studentService.createStudent(this.student).subscribe(data => {
        console.log("Created: ");
        this.router.navigate(['successEvent']);
      }, error => console.log(error));
    } else {
      this.studentService.updateStudent(this.student).subscribe((data) => {
        console.log("Updated: ");
      }, error => console.log(error));
    }
    this.router.navigate(['successEvent']);
  }
}
