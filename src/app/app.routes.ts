import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { UserComponent } from './dashboard/user/user.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { PaymentHistoryComponent } from './dashboard/payment-history/payment-history.component';
import { AgenciesComponent } from './dashboard/agencies/agencies.component';
import { ReportingComponent } from './dashboard/reporting/reporting.component';
import { AgencyAgentsListComponent } from './dashboard/agencies/agency-agents-list/agency-agents-list.component';
import { EditPaymentComponent } from './dashboard/payment-history/edit/edit.component';
import { PaymentFormComponent } from './dashboard/payment/form/form.component';

export const routes: Routes = [
  {path: '', redirectTo: 'authentication', pathMatch:'full'},
  {path: 'authentication', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'history', component: PaymentHistoryComponent},
  {path: 'agencies', component: AgenciesComponent},
  {path: 'reporting', component: ReportingComponent},
  {path: 'agency-list', component: AgencyAgentsListComponent},
  {path: 'validations', component: EditPaymentComponent},
  {path: 'tax-pay', component: PaymentFormComponent},
  {path: '**', redirectTo: 'authentication'},
];
