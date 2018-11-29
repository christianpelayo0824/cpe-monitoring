import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { Event } from '../class/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private URL: string = "http://localhost:8080/event";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private event: Event;

  constructor(private http: Http, private router: Router) { }

  setter(event) {
    this.event = event;
  }

  getter() {
    return this.event;
  }

  getAllEvent(): Observable<any> {
    return this.http.get(this.URL + '/getAllEvent', this.options).map((response: Response) => response.json());
  }

  createEvent(event: Event): Observable<any> {
    return this.http.post(this.URL + '/createEvent', JSON.stringify(this.event), this.options).map((response: Response) =>
      response.json());
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.URL + '/updateEvent', JSON.stringify(this.event), this.options).map((response: Response) =>
      response.json());
  }

  deleteEvent(eventId: Number): Observable<any> {
    return this.http.delete(this.URL + '/deleteEvent/' + eventId, this.options).map((response: Response) => response.json());
  }

  getEventStatus(eventId: Number): Observable<any> {
    return this.http.get(this.URL + '/getEventStatus/' + eventId, this.options).map((response: Response) => response.json());
  }
}
