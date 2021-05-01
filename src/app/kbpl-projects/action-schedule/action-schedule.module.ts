import { AgmCoreModule } from "@agm/core";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { MglTimelineModule } from "angular-mgl-timeline";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { DndModule } from "ngx-drag-drop";
import { NgxPaginationModule } from "ngx-pagination";
import { DragDropModule } from "primeng/primeng";
import { AlertService } from "src/app/shared/services/alert.service";
import { SharedModule } from "src/app/shared/shared.module";
import { PipesModule } from "src/app/theme/pipes/pipes.module";
import { ScheduleTabsComponent } from './schedule-tabs/schedule-tabs.component';
import { QuoteDashComponent } from './quote-dash/quote-dash.component';
import { AdministrationDashComponent } from './administration-dash/administration-dash.component';
import { ResearchComponent } from './research/research.component';
import { FieldComponent } from './field/field.component';
import { DraftingComponent } from './drafting/drafting.component';
import { QualityControlComponent } from './quality-control/quality-control.component';
import { ManagementComponent } from './management/management.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';


export const routes  = [
    {path:'',redirectTo:'quote',pathMatch:'full'},
    {path:'quote',component:QuoteDashComponent},
    {path:'administration',component:AdministrationDashComponent},
    {path:'research',component:ResearchComponent},
    {path:'field',component:FieldComponent},
    {path:'drafting',component:DraftingComponent},
    {path:'quality-control',component:QualityControlComponent},
    {path:'management',component:ManagementComponent},
    {path:'calculations',component:CalculationsComponent},
    {path:'schedule-dialog',component:ScheduleDialogComponent}
] 
@NgModule({
    declarations: [QuoteDashComponent, AdministrationDashComponent, ResearchComponent, FieldComponent, DraftingComponent, QualityControlComponent, ManagementComponent, CalculationsComponent, ScheduleDialogComponent],
    imports: [ 
        CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,
    DndModule,DragDropModule,MglTimelineModule
    ],
    providers: [AlertService],
    entryComponents: []

})
export class ActionScheduleModule { }