import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import {PatientService} from '../../services/patient.service';


@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.css']
})
export class AddPatientDialogComponent implements OnInit {

  patientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    notes: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddPatientDialogComponent>, private patientService: PatientService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.patientForm.value);
    this.patientService.addPatient(this.patientForm.value).subscribe(
      result => {
        console.log(result);
      }
    );
    this.dialogRef.close();
  }

}
