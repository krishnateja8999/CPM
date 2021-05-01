import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewActivityLogComponent } from './new-activity-log/new-activity-log.component';
import { NewBilledComponent } from './new-billed/new-billed.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { NewUnbilledComponent } from './new-unbilled/new-unbilled.component';

export const routes = [
  { path: '', redirectTo:'new-invoice', pathMatch: 'full'},
  {path:'new-invoice',component:NewInvoiceComponent},
  {path:'new-unbilled',component:NewUnbilledComponent},
  {path:'new-activity-log',component:NewActivityLogComponent},
  {path:'new-billed',component:NewBilledComponent}
];
@NgModule({
  declarations: [NewInvoiceComponent, NewUnbilledComponent, NewActivityLogComponent, NewBilledComponent ],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class KbplInvoiceModule { }
