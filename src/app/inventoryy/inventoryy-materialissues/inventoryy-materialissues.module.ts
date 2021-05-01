

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

import {MaterialActiveComponent} from './material-active/material-active.component';
import {MaterialArchivesComponent} from './material-archives/material-archives.component';
import { MaterialStoreinchargeComponent } from './material-active/material-storeincharge/material-storeincharge.component';
import { MaterialTechnicalheadComponent } from './material-active/material-technicalhead/material-technicalhead.component';

export const routes = [
    { path: '', redirectTo:'material-active', pathMatch: 'full'},
    { path:'material-active',component:MaterialActiveComponent, loadChildren: './material-active/material-active.module#MaterialActiveModule'},
    {path:'material-archives',component:MaterialArchivesComponent},
];

@NgModule({
  declarations: [MaterialActiveComponent, MaterialArchivesComponent,],
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
export class InventoryyMaterialissuesModule { }
