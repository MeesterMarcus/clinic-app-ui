import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppointmentService} from '../services/appointment.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  id: number;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private apptService: AppointmentService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.id);
    this.apptService.completeAppt(this.id).subscribe(
      result => {
        this.dialogRef.close();
      }
    );
  }

}
