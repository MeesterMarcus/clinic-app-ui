import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: {};

  constructor(private patientService: PatientService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.patientService.getPatientById(this.route.snapshot.paramMap.get('id')).subscribe(
      result => {
        this.patient = result;
        console.log(this.patient);
      }
    );
  }

  save() {
    this.patientService.save(this.patient).subscribe(
        result => {
          console.log(result);
          this._snackBar.open('Note saved', 'Ok', {duration: 2000});
        }
    );
  }

}
