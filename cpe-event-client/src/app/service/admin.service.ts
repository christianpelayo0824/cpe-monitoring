import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { Admin } from '../class/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL: string = "http://localhost:8080/administrator";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private admin: Admin;

  constructor(private http: Http) { }

  setter(admin) {
    this.admin = admin;
  }

  getter() {
    return this.admin;
  }

  getAllAdmin(): Observable<any> {
    return this.http.get(this.URL + '/getAllAdministrator', this.options).map((response: Response) => response.json());
  }

  getAdministratorIfExist(adminEmail: String, adminPassword: String): Observable<any> {
    return this.http.get(this.URL + '/getAdminByEmail/' + adminEmail + '/' + adminPassword, this.options).map((response: Response) => response.json())
  }

  createAdmin(admin: Admin): Observable<any> {
    return this.http.post(this.URL + '/createAdmin', this.options).map((response: Response) => response.json());
  }

}
