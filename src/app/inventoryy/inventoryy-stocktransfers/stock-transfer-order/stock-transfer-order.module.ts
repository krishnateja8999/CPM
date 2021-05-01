

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

import {RequestsStockComponent} from './requests-stock/requests-stock.component'
import {TechnicalheadStockComponent} from './technicalhead-stock/technicalhead-stock.component';
import { AddStockTransferComponent } from './requests-stock/add-stock-transfer/add-stock-transfer.component'

export const routes = [
  { path: '', redirectTo:'requests-stock', pathMatch: 'full'},
  { path:'requests-stock',component:RequestsStockComponent},
  { path:'technicalhead-stock',component:TechnicalheadStockComponent}

];

@NgModule({
  declarations: [RequestsStockComponent,TechnicalheadStockComponent, AddStockTransferComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddStockTransferComponent]
})
export class StockTransferOrderModule { }
