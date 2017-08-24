import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { ReportComponent } from './components/report/report.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AliensComponent } from './components/aliens/aliens.component';


export const appRoutes: Routes = [
{ path: '', component: WelcomeComponent, data: {state:'welcome'}},
{ path: 'register', component: RegisterComponent, data: {state:'register'}},
{ path: 'encounters', component: EncountersComponent, data: {state:'encounters'}},
{ path: 'report', component: ReportComponent, data: {state:'report'}},
{ path: 'aliens', component: AliensComponent, data: {state:'aliens'}},
{ path: '**', component: NotFoundComponent, data: {state:'notfound'}},
];