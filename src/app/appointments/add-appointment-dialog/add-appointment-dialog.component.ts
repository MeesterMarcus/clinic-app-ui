import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AppointmentService} from '../../services/appointment.service';

@Component({
  selector: 'app-add-appointment-dialog',
  templateUrl: './add-appointment-dialog.component.html',
  styleUrls: ['./add-appointment-dialog.component.css']
})
export class AddAppointmentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAppointmentDialogComponent>, private apptService: AppointmentService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('submitting appt');
  }

}
