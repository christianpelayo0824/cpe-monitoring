import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../class/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  private event: Event;

  constructor(private eventSerives: EventService, private router: Router) { }

  ngOnInit() {
    this.event = this.eventSerives.getter();
  }

  processForm() {
    if (this.event.eventId == undefined) {
      this.eventSerives.createEvent(this.event).subscribe(data => {
        console.log("Created");
      }, error => console.log(error));
    } else {
      this.eventSerives.updateEvent(this.event).subscribe(data => {
        console.log("Updated");
      }, error => console.log(error));
    }
    this.router.navigate(['eventList']);
  }

}
