

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

import {GeneralOpeningComponent} from './general-opening/general-opening.component';
import { MaterialOpeningComponent } from './material-opening/material-opening.component';
import { SparepartOpeningComponent } from './sparepart-opening/sparepart-opening.component';
import { TyresOpeningComponent } from './tyres-opening/tyres-opening.component';
import { AddUploadExcelComponent } from './sparepart-opening/add-upload-excel/add-upload-excel.component';
import { AddUploadExcellComponent } from './material-opening/add-upload-excell/add-upload-excell.component';

// ,loadChildren: './stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule'

export const routes = [
    { path: '', redirectTo:'sparepart-opening', pathMatch: 'full'},
    { path:'material-opening',component:MaterialOpeningComponent},
    {path:'sparepart-opening',component:SparepartOpeningComponent},
];

@NgModule({
  declarations: [GeneralOpeningComponent, MaterialOpeningComponent,SparepartOpeningComponent, TyresOpeningComponent, AddUploadExcelComponent, AddUploadExcellComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddUploadExcelComponent,AddUploadExcellComponent]
})
export class InventoryyOpeningStockModule { }
