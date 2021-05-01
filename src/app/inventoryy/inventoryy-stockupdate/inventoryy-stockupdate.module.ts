
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { DumperMercedesComponent } from './dumper-mercedes/dumper-mercedes.component';
import { DumperVolvoComponent } from './dumper-volvo/dumper-volvo.component';
import { DumperPrimaryComponent } from './dumper-primary/dumper-primary.component';
import { DumperMachineryComponent } from './dumper-machinery/dumper-machinery.component';
import { DumperMaterialsComponent } from './dumper-materials/dumper-materials.component';
import { AddMachineryUploadComponent } from './dumper-machinery/add-machinery-upload/add-machinery-upload.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';


export const routes = [
  { path: '', redirectTo:'dumper-mercedes', pathMatch: 'full'},
  { path: 'dumper-mercedes',component:DumperMercedesComponent},
  { path: 'dumper-volvo',component:DumperVolvoComponent},
  { path: 'dumper-primary',component:DumperPrimaryComponent},
  { path: 'dumper-machinery',component:DumperMachineryComponent},
  { path: 'dumper-materials',component:DumperMaterialsComponent},

  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [DumperMercedesComponent, DumperVolvoComponent, DumperPrimaryComponent, DumperMachineryComponent, DumperMaterialsComponent, AddMachineryUploadComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[AddMachineryUploadComponent]
})
export class InventoryyStockupdateModule { }
