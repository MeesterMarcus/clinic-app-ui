import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-ui.module';
import { PatientsComponent } from './patients/patients.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddPatientDialogComponent } from './patients/add-patient-dialog/add-patient-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientService} from './services/patient.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientDetailComponent } from './patients/patient-detail/patient-detail.component';
import { AddAppointmentDialogComponent } from './appointments/add-appointment-dialog/add-appointment-dialog.component';
import {AppointmentService} from './services/appointment.service';
import { SettingsComponent } from './settings/settings.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AppointmentDetailComponent } from './appointments/appointment-detail/appointment-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PageNotFoundComponent,
    AddPatientDialogComponent,
    AppointmentsComponent,
    PatientDetailComponent,
    AddAppointmentDialogComponent,
    SettingsComponent,
    ConfirmDialogComponent,
    AppointmentDetailComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  providers: [
    PatientService,
    AppointmentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPatientDialogComponent,
    AddAppointmentDialogComponent,
    ConfirmDialogComponent
  ]
})
export class AppModule { }
