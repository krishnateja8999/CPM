
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from '../../../shared/services/alert.service';
import { SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { ProjectStatusLogComponent } from './project-status-log/project-status-log.component';
import { ProjectSiteSowComponent } from './project-site-sow/project-site-sow.component';
import { ProjectAdministrationComponent } from './project-administration/project-administration.component';
import { ProjectCalculationComponent } from './project-calculation/project-calculation.component';
import { ProjectDraftingComponent } from './project-drafting/project-drafting.component';
import { ProjectFieldComponent } from './project-field/project-field.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectQualitycontrolComponent } from './project-qualitycontrol/project-qualitycontrol.component';
import { ProjectQuoteComponent } from './project-quote/project-quote.component';
import { ProjectResearchComponent } from './project-research/project-research.component';


export const routes = [
    { path: '', redirectTo:'project-status-log', pathMatch: 'full'},
    {path:'project-status-log',component:ProjectStatusLogComponent},
    {path:'project-site-sow',component:ProjectSiteSowComponent},
    {path:'project-adminstration',component:ProjectAdministrationComponent},
    {path:'project-calculation',component:ProjectCalculationComponent},
    {path:'project-drafting',component:ProjectDraftingComponent},
    {path:'project-field',component:ProjectFieldComponent},
    {path:'project-management',component:ProjectManagementComponent},
    {path:'project-qualitycontrol',component:ProjectQualitycontrolComponent},
    {path:'project-quote',component:ProjectQuoteComponent},
    {path:'project-research',component:ProjectResearchComponent},
];

@NgModule({
  declarations: [ProjectStatusLogComponent, ProjectSiteSowComponent, ProjectAdministrationComponent, ProjectCalculationComponent, ProjectDraftingComponent, ProjectFieldComponent, ProjectManagementComponent, ProjectQualitycontrolComponent, ProjectQuoteComponent, ProjectResearchComponent],
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

export class ProjectActivityModule { }
