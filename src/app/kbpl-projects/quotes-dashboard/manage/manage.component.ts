import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { NewActionComponent } from './new-action/new-action.component';
import { UpdateSowComponent } from './update-sow/update-sow.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
    {task:'Quote',action:'Prepare Quotation',jobCode:'QA',rate:'$60.00',planned:'0.50',dueDate:'2021-03-30',assignedTo:'James Smith',assigned:'0.50',actual:'	0.00',cost:'	0.00',worked:'	0.00',rem:'	0.00',Scheduled:'2021-02-04',date:'-',status:'Scheduled',submitted:'-',manage:''}
    
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  public openSowDailog() {
    let dialogRef = this.dialog.open(UpdateSowComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }

  public openSowwDailog() {
    let dialogRef = this.dialog.open(NewActionComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }
}
