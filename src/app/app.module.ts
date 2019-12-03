import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-ui.module';
import { PatientsComponent } from './patients/patients.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddPatientDialogComponent } from './patients/add-patient-dialog/add-patient-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PageNotFoundComponent,
    AddPatientDialogComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPatientDialogComponent]
})
export class AppModule { }
