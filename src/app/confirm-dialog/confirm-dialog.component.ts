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
  type: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private apptService: AppointmentService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
    this.type = data.type;
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
    switch (this.data.type) {
      case 'complete':
        this.completeAppt();
        break;
      case 'clear':
        this.clearAppts();
        break;
      default:
        console.log(this.data);
    }
  }

  completeAppt() {
    this.apptService.completeAppt(this.id).subscribe(
      result => {
        this.dialogRef.close({response: 'completed'});
      }
    );
  }

  clearAppts() {
    this.apptService.clear().subscribe(
      result => {
        this.dialogRef.close({response: 'cleared'});
      }
    );
  }

}
