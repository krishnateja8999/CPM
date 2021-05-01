

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

import {GrnSparepartsComponent} from './grn-spareparts/grn-spareparts.component';
import { GrnTyresComponent } from './grn-tyres/grn-tyres.component';
import { GrnGeneralComponent } from './grn-general/grn-general.component';
import { GrnActiveComponent } from './grn-spareparts/grn-active/grn-active.component';

// ,loadChildren: './stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule'

export const routes = [
    { path: '', redirectTo:'grn-spareparts', pathMatch: 'full'},
    { path:'grn-spareparts',component:GrnSparepartsComponent,loadChildren: './grn-spareparts/grn-spareparts.module#GrnSparepartsModule'},
    { path:'grn-tyres',component:GrnTyresComponent},
    { path:'grn-general',component:GrnGeneralComponent},
];

@NgModule({
  declarations: [GrnSparepartsComponent, GrnTyresComponent, GrnGeneralComponent],
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
export class InventoryyGrnModule { }
