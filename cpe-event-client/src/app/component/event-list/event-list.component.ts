import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { Event } from '../../class/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  private events: Event[];

  constructor(private eventServices: EventService, private router: Router) { }

  ngOnInit() {
    this.eventServices.getAllEvent().subscribe(data => {
      this.events = data;
      console.log(data);
    }, error => console.log(error))
  }

  createEvent() {
    let event = new Event;
    this.eventServices.setter(event);
    this.router.navigate(['eventForm']);
  }

  deleteEvent(event) {
    this.eventServices.deleteEvent(event.eventId).subscribe(data => {
      this.events.splice(this.events.indexOf(event), 1)
    }, error => console.log(error));
  }

  updateEvent(event) {
    this.eventServices.setter(event);
    this.router.navigate(['eventForm']);
  }
}
