
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartModule } from 'angular-highcharts';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsComponent } from './materials/materials.component';
import { TyresComponent } from './tyres/tyres.component';
import { GeneralComponent } from './general/general.component';
import { MachinaryComponent } from './machinary/machinary.component';


export const routes = [
    { path: '', redirectTo:'spareparts', pathMatch: 'full'},
    {path:'spareparts',component:SparepartsComponent},
    {path:'materials',component:MaterialsComponent},
    {path:'tyres',component:TyresComponent},
    {path:'general',component:GeneralComponent},
    {path:'machinary',component:MachinaryComponent}
];

@NgModule({
  declarations: [SparepartsComponent, MaterialsComponent, TyresComponent, GeneralComponent, MachinaryComponent],
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

export class QaApprovalsModule { }
