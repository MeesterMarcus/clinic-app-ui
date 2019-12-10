import { Component, OnInit } from '@angular/core';
import { ColumnMode} from '@swimlane/ngx-datatable';
import {MatDialog} from '@angular/material/dialog';
import {AddPatientDialogComponent} from '../patients/add-patient-dialog/add-patient-dialog.component';
import {AddAppointmentDialogComponent} from './add-appointment-dialog/add-appointment-dialog.component';
import {AppointmentService} from '../services/appointment.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';


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

  constructor(public dialog: MatDialog, private apptService: AppointmentService) { }

  ngOnInit() {
    this.getAppts();
  }

  addAppt(): void {
    const dialogRef = this.dialog.open(AddAppointmentDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
      data: {id: row.id}
    }).afterClosed().subscribe(
      result => {
        this.loadingIndicator = true;
        this.getAppts();
      }
    );
  }

}
