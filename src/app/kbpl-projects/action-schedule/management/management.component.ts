import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  items=[
    {created:'02-03-2021, 8:18 PM', refNo: 'A-025008', siteName:"	274 Clyde St.",sow:"Final As-Built Survey",streetAddress:"167 William Fair Drive, Darlington",taskName:"Management",actions:"Field Drafting",jobCode:"CCAD3",plannedHours:" 3.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"3.00",assignedUser:"Emilio William",status:"Scheduled",},
    {created:'22-01-2021, 1:45 PM', refNo: 'A-025010', siteName:"Complex Avenue",sow:"SRPR",streetAddress:"10/1 Complex Avenue, Jersey City",taskName:"Management",actions:"Maintenance Check",jobCode:"PA2",plannedHours:" 4.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"4.00",assignedUser:"Cris Leduc",status:"Pending",},

  ]
    constructor(public dialog: MatDialog,public appSettings:AppSettings) { 
    }
    ngOnInit() {
    
    }
  
  
    statusOptions = [
      {value:1, name: 'Completed', colorCode: '#00ff0040'},
      {value:2, name: 'Pending', colorCode: '#C0C0C0'},
      {value:3, name: 'In Process', colorCode: '#87CEFA'},
      {value:4, name: 'On Hold', colorCode: '#FFA50069'},
    ]
    openContractsDialog(){
      this.dialog.open(ScheduleDialogComponent,{
        width:"850px",
        height:"auto"
      })
    }
  }