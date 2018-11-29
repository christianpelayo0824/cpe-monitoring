import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';
import { Student } from '../../class/student';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  private students: Student[];

  constructor(private studentServices: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentServices.getAllStudent().subscribe(data => {
      this.students = data;
      console.log(data);
    }, error => console.log(error))
  }

  deleteStudent(student) {
    this.studentServices.deleteStudent(student.studentId).subscribe((data) => {
      this.students.splice(this.students.indexOf(student), 1);
      console.log(data);
    }, error => console.log(error));
  }

  updateStudent(student) {
    this.studentServices.setter(student);
    this.router.navigate(['studentForm']);
  }

  createStudent() {
    let student = new Student;
    this.studentServices.setter(student);
    this.router.navigate(['updateStudent']);
  }

}
