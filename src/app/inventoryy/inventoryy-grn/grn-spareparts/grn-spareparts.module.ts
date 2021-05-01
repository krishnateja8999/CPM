

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

import {GrnActiveComponent} from './grn-active/grn-active.component';
import { GrnDiscrepanciesComponent } from './grn-discrepancies/grn-discrepancies.component';
import { GrnArchivesComponent } from './grn-archives/grn-archives.component';
import { GrnStoreinchargeComponent } from './grn-active/grn-storeincharge/grn-storeincharge.component';

// ,loadChildren: './stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule'

export const routes = [
    { path: '', redirectTo:'grn-active', pathMatch: 'full'},
    { path:'grn-active',component:GrnActiveComponent,loadChildren: './grn-active/grn-active.module#GrnStoreinchargeModule'},
    { path:'grn-discrepancies',component:GrnDiscrepanciesComponent},
    { path:'grn-archives',component:GrnArchivesComponent},
];

@NgModule({
  declarations: [GrnActiveComponent, GrnDiscrepanciesComponent, GrnArchivesComponent,],
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
export class GrnSparepartsModule { }
