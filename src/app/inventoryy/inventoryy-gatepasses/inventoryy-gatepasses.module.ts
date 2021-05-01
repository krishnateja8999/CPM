

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

import {AutoComponent} from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';
import { AddGatepassComponent } from './manual/add-gatepass/add-gatepass.component';
import { ArchivesComponent } from './archives/archives.component';

export const routes = [
  { path: '', redirectTo:'auto', pathMatch: 'full'},
  { path:'auto',component:AutoComponent, loadChildren: './auto/auto.module#AutoModule'},
  { path:'manual',component:ManualComponent},
  {path:'archives',component:ArchivesComponent}
];

@NgModule({
  declarations: [AutoComponent, ManualComponent,AddGatepassComponent, ArchivesComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddGatepassComponent]
})
export class InventoryyGatepassesModule { }
