import { Component } from '@angular/core';
import { StudentService } from './service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  student: Array<any>;

  constructor(private router: Router) {
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
}
