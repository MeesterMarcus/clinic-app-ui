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
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PageNotFoundComponent,
    AddPatientDialogComponent,
    AppointmentsComponent,
    PatientDetailComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddPatientDialogComponent]
})
export class AppModule { }
