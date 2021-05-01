

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

import {PublishedPoComponent} from './published-po/published-po.component'
import {UnpublishedPoComponent} from './unpublished-po/unpublished-po.component'
import { PurchaseOrderComponent } from './purchase-order.component';

export const routes = [
  { path: '', redirectTo:'unpublished-po', pathMatch: 'full'},
  { path:'published-po',component:PublishedPoComponent},
  { path:'unpublished-po',component:UnpublishedPoComponent}

];

@NgModule({
  declarations: [PublishedPoComponent,UnpublishedPoComponent],
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
export class PurchaseOrderModule { }
