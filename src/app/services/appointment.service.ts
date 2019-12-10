import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppts() {
    return this.http.get('api/appt/getAppts');
  }

  getApptById(id) {
    return this.http.get('api/appt/getAppt/' + id);
  }

  addAppt(appt) {
    return this.http.post('api/appt/addAppt', appt);
  }

  completeAppt(apptId) {
    return this.http.post('api/appt/complete', {id: apptId});
  }

  clear() {
    return this.http.delete('api/appt/clear');
  }

  save(appt) {
    return this.http.post('api/appt/save', appt);
  }

}
