

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

import {IndentFinanceComponent} from './indent-finance/indent-finance.component'
import {IndentPurchaseComponent} from './indent-purchase/indent-purchase.component'

export const routes = [
  { path: '', redirectTo:'indent-finance', pathMatch: 'full'},
  { path:'indent-finance',component:IndentFinanceComponent},
  { path:'indent-purchase',component:IndentPurchaseComponent}

];

@NgModule({
  declarations: [IndentFinanceComponent,IndentPurchaseComponent,],
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
export class IndentsModule { }
