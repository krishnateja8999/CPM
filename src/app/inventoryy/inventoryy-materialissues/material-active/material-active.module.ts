

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

import {MaterialStoreinchargeComponent} from './material-storeincharge/material-storeincharge.component'
import {MaterialTechnicalheadComponent} from './material-technicalhead/material-technicalhead.component';
import { AddJobCardComponent } from './material-storeincharge/add-job-card/add-job-card.component';

export const routes = [
  { path: '', redirectTo:'material-storeincharge', pathMatch: 'full'},
  { path:'material-storeincharge',component:MaterialStoreinchargeComponent},
  { path:'material-technicalhead',component:MaterialTechnicalheadComponent}

];

@NgModule({
  declarations: [MaterialStoreinchargeComponent,MaterialTechnicalheadComponent, AddJobCardComponent,],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddJobCardComponent]
})
export class MaterialActiveModule { }
