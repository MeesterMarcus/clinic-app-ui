import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../services/appointment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appt: any;
  patient: {};

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

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

}
