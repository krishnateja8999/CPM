import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { GridColumnsProjectsDialogComponent } from './grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { KbplProjectsComponent } from './kbpl-projects.component';
import { ContractsDialogComponent } from './contracts-dialog/contracts-dialog.component';
import { ProjectsGridviewComponent } from './projects-gridview/projects-gridview.component';
import { ProjectsMapviewComponent } from './projects-mapview/projects-mapview.component';
import { ProjectsKanbanviewComponent } from './projects-kanbanview/projects-kanbanview.component';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AddNotesContractorsComponent } from './projects-gridview/add-notes-contractors/add-notes-contractors.component';
import { ShowIssueComponent } from './projects-gridview/show-issue/show-issue.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ActionScheduleComponent } from './action-schedule/action-schedule.component';
import { ScheduleTabsComponent } from './action-schedule/schedule-tabs/schedule-tabs.component';
import { QuotesGridColDialogComponent } from './quotes/quotes-grid-col-dialog/quotes-grid-col-dialog.component';
import { QuotesDialogComponent } from './quotes/quotes-dialog/quotes-dialog.component';
import { QuotesDashboardComponent } from './quotes-dashboard/quotes-dashboard.component';
import { UpdateQuoteComponent } from './quotes/update-quote/update-quote.component';
import { NewprojectDashboardComponent } from './newproject-dashboard/newproject-dashboard.component';

export const routes = [
  {path:'',redirectTo:'gridview',pathMatch:'full'},
  {path:'gridview',component:ProjectsGridviewComponent,data:{breadcrumb:'Projects'}},
  {path:'mapview',component:ProjectsMapviewComponent},
  {path:'kanbanview',component:ProjectsKanbanviewComponent,data:{breadcrumb:'Projects'}},
  {path: 'quotes', component: QuotesComponent,data:{breadcrumb:'Projects'}},
  {path: 'scheduling',component: ActionScheduleComponent, loadChildren: './action-schedule/action-schedule.module#ActionScheduleModule',data:{breadcrumb:'Projects'}},
  {path:'project-dashboard',component:ProjectDashboardComponent,loadChildren:'./project-dashboard/kbpl-project-dashboard.module#KBPLProjectDashboardModule',data:{breadcrumb:'Project Dashboard'}},
  {path:'quotes-dashboard',component:QuotesDashboardComponent,loadChildren: './quotes-dashboard/quotes-dashboard.module#QuotesDashboardModule'},
  {path:'newproject-dashboard',component:NewprojectDashboardComponent,loadChildren: './newproject-dashboard/newproject-dashboard.module#NewprojectDashboardModule'}
];

@NgModule({
  declarations:[ KbplProjectsComponent,ProjectDashboardComponent,AddProjectDialogComponent,GridColumnsProjectsDialogComponent, ContractsDialogComponent, ProjectsGridviewComponent, ProjectsMapviewComponent, ProjectsKanbanviewComponent, AddNotesContractorsComponent, ShowIssueComponent, QuotesComponent, ActionScheduleComponent,ScheduleTabsComponent, QuotesGridColDialogComponent, QuotesDialogComponent,QuotesDashboardComponent, UpdateQuoteComponent, NewprojectDashboardComponent,],
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
  entryComponents:[AddProjectDialogComponent,GridColumnsProjectsDialogComponent,ContractsDialogComponent,AddNotesContractorsComponent,ShowIssueComponent,QuotesGridColDialogComponent,QuotesDialogComponent,UpdateQuoteComponent]
})
export class KBPLProjectsModule { }
