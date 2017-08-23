import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { ReportComponent } from './components/report/report.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AliensComponent } from './components/aliens/aliens.component';


export const appRoutes: Routes = [
{ path: '', component: WelcomeComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'encounters', component: EncountersComponent},
{ path: 'report', component: ReportComponent},
{ path: 'this', component: AliensComponent},
{ path: '**', component: NotFoundComponent},
];