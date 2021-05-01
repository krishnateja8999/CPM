
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { ProjectPropertyComponent } from './project-property/project-property.component';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { ProjectHoursComponent } from './project-hours/project-hours.component';
import { ProjectExpensesComponent } from './project-expenses/project-expenses.component';
import { ProjectInvoicesComponent } from './project-invoices/project-invoices.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectAdministrationComponent } from './project-activity/project-administration/project-administration.component';
import { ProjectAddSiteComponent } from './project-budget/project-add-site/project-add-site.component';
import { ProjectAddSowComponent } from './project-budget/project-add-sow/project-add-sow.component';
import { ProjectNewActionComponent } from './project-manage/project-new-action/project-new-action.component';
import { ProjectUpdateSowComponent } from './project-manage/project-update-sow/project-update-sow.component';
import { ProjectInvoiceComponent } from './project-invoices/project-invoice/project-invoice.component';
import { ProjectUnbilledComponent } from './project-invoices/project-unbilled/project-unbilled.component';
import { ProjectActivityLogComponent } from './project-invoices/project-activity-log/project-activity-log.component';
import { ProjectBilledComponent } from './project-invoices/project-billed/project-billed.component';



export const routes = [
  {path:'',redirectTo:'project-activity',pathMatch:'full'},
  {path:'project-activity',component:ProjectActivityComponent,loadChildren: './project-activity/project-activity.module#ProjectActivityModule', data: { breadcrumb: 'Activity' } },
  {path:'project-property',component:ProjectPropertyComponent, data: { breadcrumb: 'Property' } },
  {path:'project-budget',component:ProjectBudgetComponent, data: { breadcrumb: 'Budget' } },
  {path:'project-manage',component:ProjectManageComponent, data: { breadcrumb: 'Manage' }},
  {path:'project-hours',component:ProjectHoursComponent, data: { breadcrumb: 'Hours' }},
  {path:'project-expenses',component:ProjectExpensesComponent, data: { breadcrumb: 'Expenses' }},
  {path:'project-invoices',component:ProjectInvoicesComponent,loadChildren: './project-invoices/project-invoices.module#ProjectInvoicesModule', data: { breadcrumb: 'Invoices' }},
  {path:'project-summary',component:ProjectSummaryComponent, data: { breadcrumb: 'Summary' }}, 
]
@NgModule({
  declarations: [ProjectActivityComponent, ProjectPropertyComponent,ProjectBudgetComponent,ProjectManageComponent,ProjectHoursComponent, ProjectExpensesComponent, ProjectInvoicesComponent,ProjectSummaryComponent, ProjectAddSiteComponent, ProjectAddSowComponent, ProjectNewActionComponent, ProjectUpdateSowComponent,],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[ProjectAddSiteComponent,ProjectAddSowComponent,ProjectNewActionComponent,ProjectUpdateSowComponent]
})
export class NewprojectDashboardModule {}
