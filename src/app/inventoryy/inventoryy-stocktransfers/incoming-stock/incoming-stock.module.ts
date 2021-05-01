

import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

import {StoreInchargeComponent} from './store-incharge/store-incharge.component'
import {TechnicalEngineerComponent} from './technical-engineer/technical-engineer.component';

export const routes = [
  { path: '', redirectTo:'store-incharge', pathMatch: 'full'},
  { path:'store-incharge',component:StoreInchargeComponent},
  { path:'technical-engineer',component:TechnicalEngineerComponent}

];

@NgModule({
  declarations: [StoreInchargeComponent,TechnicalEngineerComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[]
})
export class IncomingStockModule { }
