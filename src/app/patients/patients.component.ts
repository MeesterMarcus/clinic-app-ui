import {Component, OnInit} from '@angular/core';
import {ColumnMode } from '@swimlane/ngx-datatable';
import {AddPatientDialogComponent} from './add-patient-dialog/add-patient-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {PatientService} from '../services/patient.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;


  rows = [];
  temp = [];
  columnsWithSearch: string[] = [];

  constructor(public dialog: MatDialog, private patientService: PatientService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPatients();

  }

  addPatient(): void {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.response === 'submitted') {
        this._snackBar.open('Successfully added patient', 'Ok', {duration: 2000});
      }
      console.log('The dialog was closed');
      this.loadingIndicator = true;
      this.getPatients();
    });
  }

  getPatients() {
    this.patientService.getPatients().subscribe(
      (result: Array<any>) => {
        this.temp = [...result];
        this.rows = result;
        this.loadingIndicator = false;
        this.columnsWithSearch = Object.keys(this.rows[0]);
      }
    );
  }

  onActivate(event) {
    if (event.type === 'click') {
      this.router.navigate(['/patients/', event.row.id]);
    }
  }

  updateFilter(event) {
    const filter = event.target.value.toLowerCase();

    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.columnsWithSearch.length; i++) {
        const colValue = item[this.columnsWithSearch[i]] ;
        console.log(colValue);

        // if no filter OR colvalue is NOT null AND contains the given filter
        if (!filter || (!!colValue && colValue.toString().toLowerCase().indexOf(filter) !== -1)) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
  }

  viewDetails(row) {
    console.log(row);
    this.router.navigate(['/patients/', row.id]);
  }

}
