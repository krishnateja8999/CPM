
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
import { ActivityComponent } from './activity/activity.component';
import { PropertyComponent } from './property/property.component';
import { BudgetComponent } from './budget/budget.component';
import { ManageComponent } from './manage/manage.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SummaryComponent } from './summary/summary.component';
import { SowStatusDialogComponent } from './budget/sow-status-dialog/sow-status-dialog.component';
import { SiteStatusDialogComponent } from './budget/site-status-dialog/site-status-dialog.component';
import { UpdateSowComponent } from './manage/update-sow/update-sow.component';
import { NewActionComponent } from './manage/new-action/new-action.component';
import { NewInvoiceComponent } from './invoices/new-invoice/new-invoice.component';



export const routes = [
  {path:'',redirectTo:'activity',pathMatch:'full'},
  {path:'activity',component:ActivityComponent, loadChildren: './activity/activity.module#ActivityModule', data: { breadcrumb: 'Activity' } },
  {path:'property',component:PropertyComponent, data: { breadcrumb: 'Property' } },
  {path:'budget',component:BudgetComponent, data: { breadcrumb: 'Budget' } },
  {path:'manage',component:ManageComponent, data: { breadcrumb: 'Manage' }},
  {path:'hours',component:HoursComponent, data: { breadcrumb: 'Hours' }},
  {path:'expenses',component:ExpensesComponent, data: { breadcrumb: 'Expenses' }},
  {path:'invoices',component:InvoicesComponent, loadChildren: './invoices/kbpl-invoice.module#KbplInvoiceModule', data: { breadcrumb: 'Invoices' }},
  {path:'summary',component:SummaryComponent, data: { breadcrumb: 'Summary' }}, 
]
@NgModule({
  declarations: [ActivityComponent, PropertyComponent, BudgetComponent, ManageComponent, HoursComponent, ExpensesComponent, InvoicesComponent, SummaryComponent, SowStatusDialogComponent, SiteStatusDialogComponent, UpdateSowComponent, NewActionComponent,],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[SowStatusDialogComponent,SiteStatusDialogComponent,UpdateSowComponent,NewActionComponent]
})
export class QuotesDashboardModule { }
