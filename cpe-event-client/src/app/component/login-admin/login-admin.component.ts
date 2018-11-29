import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../class/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  private admin: Admin;

  private password: String;
  private email: String;


  constructor(private router: Router, private adminServices: AdminService) { }

  ngOnInit() {
  }

  createAdmin() {
    this.router.navigate(['adminForm']);
    let admin = new Admin();
    this.adminServices.setter(admin);
  }

  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  aboutPage() {
    this.router.navigate(['about']);
  }

  processLogin() {
    if (this.adminServices.getAdministratorIfExist(this.email, this.password).subscribe(data => {
      if (data == false) {

        let status = document.getElementById('status')
        let emailInput = document.getElementById('email')

        emailInput.focus()
        status.innerHTML = "Account not exist!"

        this.router.navigate(['loginAdmin'])
      } else {
        this.router.navigate(['adminDashboard'])
      }
    }, error => console.log(error))) {

    }
  }

}
