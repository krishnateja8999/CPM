
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
import { IndentMaterialsComponent } from './indent-materials/indent-materials.component';
import { IndentTyresComponent } from './indent-tyres/indent-tyres.component';
import { IndentSparepartsComponent } from './indent-spareparts/indent-spareparts.component';


export const routes = [
    { path: '', redirectTo:'indent-spareparts', pathMatch: 'full'},
    {path:'indent-spareparts',component:IndentSparepartsComponent},
    {path:'indent-materials',component:IndentMaterialsComponent},
    {path:'indent-tyres',component:IndentTyresComponent},
];

@NgModule({
  declarations: [IndentMaterialsComponent,IndentTyresComponent,IndentSparepartsComponent],
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

export class IndentApprovalsModule { }
