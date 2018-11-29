import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../class/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  private student:Student

  constructor(private studentServices:StudentService, private router:Router) { }

  ngOnInit() {
    this.student = this.studentServices.getter();
  }

  processForm() {
    this.studentServices.updateStudent(this.student).subscribe(data=> {
      console.log('Push')
    }, error=>console.log(error))
    this.router.navigate(['studentList'])
  }

}
