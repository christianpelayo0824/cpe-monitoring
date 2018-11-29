import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-closed-event',
  templateUrl: './closed-event.component.html',
  styleUrls: ['./closed-event.component.css']
})
export class ClosedEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studentDashboardPage() {
    this.router.navigate(['dashboard']);
  }
}
