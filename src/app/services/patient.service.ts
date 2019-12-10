import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get('api/patients/getPatients');
  }

  addPatient(patient) {
    return this.http.post('api/patients/addPatient', patient);
  }

  getPatientById(id) {
    return this.http.get('api/patients/getPatient/' + id);
  }

  save(patient) {
    return this.http.post('api/patients/save', patient);
  }
}
