import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../class/student';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private URL: string = "http://localhost:8080/student";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private student: Student;


  constructor(private http: Http) { }

  setter(student) {
    this.student = student;
  }

  getter() {
    return this.student;
  }

  getAllStudent(): Observable<any> {
    return this.http.get(this.URL + '/getAllStudent', this.options).map((response: Response) => response.json());
  }

  getStudentById(studentId: Number): Observable<any> {
    return this.http.get(this.URL + '/getStudentById/' + studentId, this.options).map((response: Response) => response.json());
  }

  deleteStudent(studentId: Number): Observable<any> {
    return this.http.delete(this.URL + '/deleteStudent/' + studentId, this.options).map((response: Response) => response.json());
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post(this.URL + '/createStudent', JSON.stringify(this.student), this.options).map((response: Response) => response.json);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.URL + '/updateStudent', JSON.stringify(this.student), this.options).map((response: Response) => response.json);
  }

  getNoOfParticipants(eventId: Number): Observable<any> {
    return this.http.get(this.URL + '/getNoOfParicipants/' + eventId, this.options).map((response: Response) => response.json());
  }

}
