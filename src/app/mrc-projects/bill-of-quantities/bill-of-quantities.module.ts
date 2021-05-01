import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillOfQuantitiesComponent } from './bill-of-quantities.component';
import { MasterComponent } from './master/master.component';
import { DeviationItemsComponent } from './deviation-items/deviation-items.component';
import { ExtraItemsComponent } from './extra-items/extra-items.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddExtraitemComponent } from './extra-items/add-extraitem/add-extraitem.component';
import { AddDeviationComponent } from './deviation-items/add-deviation/add-deviation.component';
import { UploadBoqComponent } from './master/upload-boq/upload-boq.component';
import { AddCategoryComponent } from './master/add-category/add-category.component';
import { UpBoqComponent } from './deviation-items/up-boq/up-boq.component';
import { AddItemBOQComponent } from './master/add-item-boq/add-item-boq.component';

export const routes = [
  { path: '', redirectTo:"master", pathMatch: 'full'},
  { path: 'deviation', component:DeviationItemsComponent, data: { breadcrumb: '' } },
  { path: 'extra-items', component:ExtraItemsComponent, data: { breadcrumb: '' } },
  { path: 'master', component:MasterComponent, data: { breadcrumb: '' } },
  { path: 'add-item', component:AddItemBOQComponent, data: { breadcrumb: '' } },
];

@NgModule({
  declarations: [ MasterComponent, DeviationItemsComponent, ExtraItemsComponent, AddExtraitemComponent, AddDeviationComponent, UploadBoqComponent, AddCategoryComponent, UpBoqComponent, AddItemBOQComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[AddDeviationComponent,AddExtraitemComponent,UploadBoqComponent, AddCategoryComponent, UpBoqComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class BillOfQuantitiesModule { }
