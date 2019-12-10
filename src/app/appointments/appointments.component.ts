import {Component, OnInit} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {MatDialog} from '@angular/material/dialog';
import {AddPatientDialogComponent} from '../patients/add-patient-dialog/add-patient-dialog.component';
import {AddAppointmentDialogComponent} from './add-appointment-dialog/add-appointment-dialog.component';
import {AppointmentService} from '../services/appointment.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  loadingIndicator = false;
  reorderable = true;
  ColumnMode = ColumnMode;


  rows: {};

  constructor(public dialog: MatDialog, private apptService: AppointmentService, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAppts();
  }

  addAppt(): void {
    const dialogRef = this.dialog.open(AddAppointmentDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.response === 'submit') {
        this._snackBar.open('Successfully added appointment', 'Ok', {duration: 2000});
      }
      this.loadingIndicator = true;
      this.getAppts();
    });
  }

  getAppts() {
    this.apptService.getAppts().subscribe(
      (result: Array<any>) => {
        result.forEach(item => {
          item.fullName = item.patientEntity.firstName + ' ' + item.patientEntity.lastName;
        });
        this.rows = result;
        this.loadingIndicator = false;
      }
    );
  }

  markComplete(row) {
    console.log('complete: ', row);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: row.id,
        type: 'complete'
      }
    }).afterClosed().subscribe(
      result => {
        console.log(result);
        if (result.response === 'completed') {
          this._snackBar.open('Appointment marked complete', 'Ok', {duration: 2000});
        }
        this.loadingIndicator = true;
        this.getAppts();
      }
    );
  }

  clear() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        type: 'clear'
      }
    }).afterClosed().subscribe(
      result => {
        console.log(result);
        if (result.response === 'cleared') {
          this._snackBar.open('Appointment cleared', 'Ok', {duration: 2000});

        }
        this.loadingIndicator = true;
        this.getAppts();
      }
    );
  }

  viewDetails(row) {
    this.router.navigate(['/appointments/', row.id]);
  }

}
