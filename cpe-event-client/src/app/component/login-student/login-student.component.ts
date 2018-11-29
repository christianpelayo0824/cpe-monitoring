import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  private email: String;
  private password: String;

  constructor(private studentServices: StudentService, private router: Router) { }

  ngOnInit() {

  }

  processLogin() {
    console.log(this.email);
    console.log(this.password);
    if (this.password || this.email != undefined) {
      this.studentServices.getStudentById(85).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
      this.router.navigate(['dashboard']);      
    } else {
      this.router.navigate(['loginStudent']);
    }
  }
}
