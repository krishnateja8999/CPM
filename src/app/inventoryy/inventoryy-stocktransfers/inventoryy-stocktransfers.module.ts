

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

import {ArchivesStockComponent} from './archives-stock/archives-stock.component';
import { DiscrepanciesStockComponent } from './discrepancies-stock/discrepancies-stock.component';
import { IncomingStockComponent } from './incoming-stock/incoming-stock.component';
import { OutgoingStockComponent } from './outgoing-stock/outgoing-stock.component';
import { StockTransferOrderComponent } from './stock-transfer-order/stock-transfer-order.component';
import { RequestsStockComponent } from './stock-transfer-order/requests-stock/requests-stock.component';
import { TechnicalheadStockComponent } from './stock-transfer-order/technicalhead-stock/technicalhead-stock.component';
import { StoreInchargeComponent } from './incoming-stock/store-incharge/store-incharge.component';
import { TechnicalEngineerComponent } from './incoming-stock/technical-engineer/technical-engineer.component';

export const routes = [
    { path: '', redirectTo:'stock-transfer-order', pathMatch: 'full'},
    { path:'stock-transfer-order',component:StockTransferOrderComponent,loadChildren: './stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule'},
    { path:'outgoing-stock',component:OutgoingStockComponent},
    {path:'incoming-stock',component:IncomingStockComponent,loadChildren: './incoming-stock/incoming-stock.module#IncomingStockModule'},
    {path:'discrepancies-stock',component:DiscrepanciesStockComponent},
    {path:'archives-stock',component:ArchivesStockComponent},
];

@NgModule({
  declarations: [ArchivesStockComponent, DiscrepanciesStockComponent,IncomingStockComponent, OutgoingStockComponent,StockTransferOrderComponent,],
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
export class InventoryyStocktransfersModule { }
