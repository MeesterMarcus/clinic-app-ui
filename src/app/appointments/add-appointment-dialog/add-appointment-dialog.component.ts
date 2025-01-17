import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AppointmentService} from '../../services/appointment.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import {Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.css']
})
export class AddAppointmentDialogComponent implements OnInit {

  patients = [];

  filteredOptions: Observable<Array<any>>;


  apptForm = new FormGroup({
    patient: new FormControl(''),
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
        this.filteredOptions = this.apptForm.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );

      }
    );
  }

  private _filter(value: any): Array<any> {
    if (value.patient) {
      const filterValue = value.patient.toString().toLowerCase();
      return this.patients.filter(option => option.fullName.toLowerCase().includes(filterValue));
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let appt = this.apptForm.value;
    appt.complete = 'N';
    console.log(appt);
    this.apptService.addAppt(appt).subscribe(
      result => {
        console.log(result);
      }
    );
    this.dialogRef.close({response: 'submit'});
  }

  displayFn(val) {
    return val ? val.fullName : val;
  }

}
