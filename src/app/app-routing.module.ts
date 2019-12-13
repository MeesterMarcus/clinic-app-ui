import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PatientDetailComponent} from './patients/patient-detail/patient-detail.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {SettingsComponent} from './settings/settings.component';
import {AppointmentDetailComponent} from './appointments/appointment-detail/appointment-detail.component';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/:id', component: AppointmentDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
