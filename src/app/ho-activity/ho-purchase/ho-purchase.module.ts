
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartModule } from 'angular-highcharts';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndentsComponent } from './indents/indents.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { QuotationReviewComponent } from './quotation-review/quotation-review.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { RFQComponent } from './rfq/rfq.component';
import { WorkOrderComponent} from './work-order/work-order.component';
import { AddRequisitionDialogComponent } from './requisition/add-requisition-dialog/add-requisition-dialog.component';
import { IndentFinanceComponent } from './indents/indent-finance/indent-finance.component';
import { IndentPurchaseComponent } from './indents/indent-purchase/indent-purchase.component';
import { UnpublishedPoComponent } from './purchase-order/unpublished-po/unpublished-po.component';
import { PublishedPoComponent } from './purchase-order/published-po/published-po.component';
import { WorkPublishedComponent } from './work-order/work-published/work-published.component';
import { WorkUnpublishedComponent } from './work-order/work-unpublished/work-unpublished.component'


export const routes = [
    { path: '', redirectTo:'requisition', pathMatch: 'full'},
    {path:'indents',component:IndentsComponent,loadChildren: './indents/indents.module#IndentsModule'},
    {path:'purchase-order',component:PurchaseOrderComponent,loadChildren: './purchase-order/purchase-order.module#PurchaseOrderModule'},
    {path:'quotation-review',component:QuotationReviewComponent},
    {path:'requisition',component:RequisitionComponent},
    {path:'rfq',component:RFQComponent},
    {path:'work-order',component:WorkOrderComponent,loadChildren: './work-order/work-order.module#WorkOrderModule'}
];

@NgModule({
  declarations: [IndentsComponent,PurchaseOrderComponent,QuotationReviewComponent,RequisitionComponent,RFQComponent,WorkOrderComponent, AddRequisitionDialogComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddRequisitionDialogComponent]
})

export class HoPurchaseModule { }
