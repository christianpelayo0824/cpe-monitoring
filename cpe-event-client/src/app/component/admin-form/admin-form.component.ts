import { Component, OnInit } from '@angular/core';
import { Admin } from '../../class/admin';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  private admin: Admin;

  constructor(private adminServices: AdminService) { }

  ngOnInit() {
    this.admin = this.adminServices.getter()
  }

  // This is a test
  processForm() {
    if (this.admin.firstname == undefined) {
      console.log('undefined')
    } else {
      console.log('Not undefined')
    }
  }
}
