import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppts() {
    return this.http.get('api/getAppts');
  }

  addAppt(appt) {
    return this.http.post('api/addAppt', appt);
  }

}
