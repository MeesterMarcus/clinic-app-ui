import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../services/appointment.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appt: any;
  patient: {};

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.appointmentService.getApptById(this.route.snapshot.paramMap.get('id')).subscribe(
      result => {
        this.appt = result;
        this.patient = this.appt.patientEntity;
        console.log(this.appt);
        console.log(this.patient);
      }
    );
  }

  save() {
      this.appointmentService.save(this.appt).subscribe(
          result => {
              console.log(result);
              this._snackBar.open('Note saved', 'Ok', {duration: 2000});
          }
      );
  }

}
