

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

import {GrnStoreinchargeComponent} from './grn-storeincharge/grn-storeincharge.component';
import { GrnTechnicalengineerComponent } from './grn-technicalengineer/grn-technicalengineer.component';


// ,loadChildren: './stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule'

export const routes = [
    { path: '', redirectTo:'grn-storeincharge', pathMatch: 'full'},
    { path:'grn-storeincharge',component:GrnStoreinchargeComponent},
    { path:'grn-technicalengineer',component:GrnTechnicalengineerComponent},
]
@NgModule({
  declarations: [GrnStoreinchargeComponent, GrnTechnicalengineerComponent],
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
export class GrnStoreinchargeModule { }
