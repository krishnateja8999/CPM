import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { NewActionComponent } from '../../quotes-dashboard/manage/new-action/new-action.component';
import { UpdateSowComponent } from '../../quotes-dashboard/manage/update-sow/update-sow.component';
import { ProjectNewActionComponent } from './project-new-action/project-new-action.component';
import { ProjectUpdateSowComponent } from './project-update-sow/project-update-sow.component';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrls: ['./project-manage.component.scss']
})
export class ProjectManageComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
    {task:'Quality Control',action:'Field QC',jobCode:'	FQC',rate:'$110.00',planned:'4.00',dueDate:'03-30-2021',assignedTo:'-',assigned:'0.00',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'-',date:'-',status:'UnScheduled',submitted:'-',manage:''},
    {task:'Research',action:'Project Setup',jobCode:'PA1',rate:'$60.00',planned:'2.00',dueDate:'03-30-2021',assignedTo:'-',assigned:'0.00',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'-',date:'-',status:'Scheduled',submitted:'-',manage:''},
    {task:'Field',action:'Field Design',jobCode:'EPC1',rate:'$100.00',planned:'2.00',dueDate:'03-30-2021',assignedTo:'-',assigned:'0.00',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'-',date:'-',status:'UnScheduled',submitted:'-',manage:''},
    {task:'Quote',action:'Prepare Quotation',jobCode:'QA',rate:'$60.00',planned:'2.00',dueDate:'03-30-2021',assignedTo:'-',assigned:'0.00',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'-',date:'-',status:'UnScheduled',submitted:'-',manage:''},
    {task:'Drafting',action:'Field Drafting',jobCode:'CCAD3',rate:'$50.00',planned:'4.00',dueDate:'03-30-2021',assignedTo:'-',assigned:'0.00',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'-',date:'-',status:'Scheduled',submitted:'-',manage:''},
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  public openSowDailog() {
    let dialogRef = this.dialog.open(ProjectUpdateSowComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }

  public openSowwDailog() {
    let dialogRef = this.dialog.open(ProjectNewActionComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }
}
