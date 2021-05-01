import { HoPurchaseComponent } from './ho-purchase/ho-purchase.component';
import { IndentApprovalsComponent } from './indent-approvals/indent-approvals.component';
import { PoApprovalsComponent } from './po-approvals/po-approvals.component';
import { QaApprovalsComponent } from './qa-approvals/qa-approvals.component';
import { ServiceApprovalsComponent } from './service-approvals/service-approvals.component';
import { StoDiscrepanciesComponent } from './sto-discrepancies/sto-discrepancies.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoActivityComponent } from './ho-activity.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { IndentSparepartsComponent } from './indent-approvals/indent-spareparts/indent-spareparts.component';
import { IndentMaterialsComponent } from './indent-approvals/indent-materials/indent-materials.component';
import { IndentTyresComponent } from './indent-approvals/indent-tyres/indent-tyres.component';
import { RequisitionComponent } from './ho-purchase/requisition/requisition.component';
import { RFQComponent } from './ho-purchase/rfq/rfq.component';
import { QuotationReviewComponent } from './ho-purchase/quotation-review/quotation-review.component';
import { IndentsComponent } from './ho-purchase/indents/indents.component';
import { PurchaseOrderComponent } from './ho-purchase/purchase-order/purchase-order.component';
import { WorkOrderComponent } from './ho-purchase/work-order/work-order.component';

export const routes = [
  { path: '', redirectTo:'qa-approvals', pathMatch: 'full'},
  { path: 'ho-purchase',component:HoPurchaseComponent, loadChildren: './ho-purchase/ho-purchase.module#HoPurchaseModule'},
  { path: 'indent-approvals',component:IndentApprovalsComponent, loadChildren: './indent-approvals/indent-approvals.module#IndentApprovalsModule'},
  { path: 'po-approvals',component:PoApprovalsComponent},
  { path: 'qa-approvals',component:QaApprovalsComponent, loadChildren: './qa-approvals/qa-approvals.module#QaApprovalsModule'},
  { path: 'service-approvals',component:ServiceApprovalsComponent},
  { path: 'sto-discrepancies',component:StoDiscrepanciesComponent},






  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [HoActivityComponent,HoPurchaseComponent,IndentApprovalsComponent,PoApprovalsComponent,QaApprovalsComponent,ServiceApprovalsComponent,StoDiscrepanciesComponent, ],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class HoActivityModule { }
