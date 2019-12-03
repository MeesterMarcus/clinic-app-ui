import {Component, Inject, OnInit} from '@angular/core';
import { ColumnMode} from '@swimlane/ngx-datatable';
import {AddPatientDialogComponent} from './add-patient-dialog/add-patient-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PatientService} from '../services/patient.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-home',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  loadingIndicator = false;
  reorderable = true;
  ColumnMode = ColumnMode;


  rows: {};

  constructor(public dialog: MatDialog, private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      result => {
        console.log(result);
        this.rows = result;
      }
    );
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
