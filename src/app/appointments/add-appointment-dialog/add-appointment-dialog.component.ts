import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AppointmentService} from '../../services/appointment.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.css']
})
export class AddAppointmentDialogComponent implements OnInit {

  patients = [];

  apptForm = new FormGroup({
    patientEntity: new FormControl(''),
    dateTime: new FormControl(''),
    apptType: new FormControl(''),
    notes: new FormControl('')
  });


  constructor(public dialogRef: MatDialogRef<AddAppointmentDialogComponent>, private apptService: AppointmentService, private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      (result: Array<any>) => {
        result.forEach(item => {
          item.fullName = item.firstName + ' ' + item.lastName;
        });
        this.patients = result;

      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.apptService.addAppt(this.apptForm.value).subscribe(
      result => {
        console.log(result);
      }
    );
    this.dialogRef.close();
  }

  displayFn(val) {
    return val ? val.fullName : val;
  }

}
