import { InventoryyGrnComponent } from './inventoryy-grn/inventoryy-grn.component';
import { InventoryyGatepassesComponent } from './inventoryy-gatepasses/inventoryy-gatepasses.component';
import { InventoryyStocktransfersComponent } from './inventoryy-stocktransfers/inventoryy-stocktransfers.component';
import { InventoryyMaterialissuesComponent } from './inventoryy-materialissues/inventoryy-materialissues.component';
import { InventoryyOpeningstockComponent } from './inventoryy-openingstock/inventoryy-openingstock.component';
import { InventoryyStockupdateComponent } from './inventoryy-stockupdate/inventoryy-stockupdate.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryyComponent } from './inventoryy.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { GrnSparepartsComponent } from './inventoryy-grn/grn-spareparts/grn-spareparts.component';

export const routes = [
  { path: '', redirectTo:'inventoryy-grn', pathMatch: 'full'},
  { path: 'inventoryy-grn',component:InventoryyGrnComponent, loadChildren: './inventoryy-grn/inventoryy-grn.module#InventoryyGrnModule'},
  { path: 'inventoryy-gatepasses',component:InventoryyGatepassesComponent, loadChildren: './inventoryy-gatepasses/inventoryy-gatepasses.module#InventoryyGatepassesModule'},
  { path: 'inventoryy-stocktransfers',component:InventoryyStocktransfersComponent, loadChildren: './inventoryy-stocktransfers/inventoryy-stocktransfers.module#InventoryyStocktransfersModule'},
  { path: 'inventoryy-materialissues',component:InventoryyMaterialissuesComponent,loadChildren: './inventoryy-materialissues/inventoryy-materialissues.module#InventoryyMaterialissuesModule'},
  { path: 'inventoryy-openingstock',component:InventoryyOpeningstockComponent,loadChildren: './inventoryy-openingstock/inventoryy-openingstock.module#InventoryyOpeningStockModule'},
  { path: 'inventoryy-stockupdate',component:InventoryyStockupdateComponent,loadChildren: './inventoryy-stockupdate/inventoryy-stockupdate.module#InventoryyStockupdateModule'},






  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [InventoryyGrnComponent,InventoryyGatepassesComponent,InventoryyStocktransfersComponent,InventoryyMaterialissuesComponent,InventoryyOpeningstockComponent,InventoryyStockupdateComponent,InventoryyStocktransfersComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class InventoryyModule { }
