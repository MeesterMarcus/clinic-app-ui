import { Component, OnInit } from '@angular/core';
import { ColumnMode} from '@swimlane/ngx-datatable';
import {MatDialog} from '@angular/material/dialog';
import {AddPatientDialogComponent} from '../patients/add-patient-dialog/add-patient-dialog.component';
import {AddAppointmentDialogComponent} from './add-appointment-dialog/add-appointment-dialog.component';


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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
    this.loadingIndicator = false;
  }

}
