import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-event',
  templateUrl: './success-event.component.html',
  styleUrls: ['./success-event.component.css']
})
export class SuccessEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studentDashboardPage() {
    this.router.navigate(['dashboard']);
  }
}
