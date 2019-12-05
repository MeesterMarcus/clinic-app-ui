import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get('api/getPatients');
  }

  addPatient(patient) {
    return this.http.post('api/addPatient', patient);
  }

  getPatientById(id) {
    return this.http.get('api/getPatient/' + id);
  }
}
