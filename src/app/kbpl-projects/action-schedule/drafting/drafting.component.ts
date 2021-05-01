import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-drafting',
  templateUrl: './drafting.component.html',
  styleUrls: ['./drafting.component.scss']
})
export class DraftingComponent implements OnInit {

  items=[
    {created:'02-03-2021, 8:18 PM', refNo: 'A-025008', siteName:"	274 Clyde St.",sow:"Final As-Built Survey",streetAddress:"167 William Fair Drive, Darlington",taskName:"Drafting",actions:"Field QC",jobCode:"FQC",plannedHours:" 3.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"3.00",assignedUser:"Bob Cormier",status:"Scheduled",},
    {created:'22-01-2021, 1:45 PM', refNo: 'A-025006', siteName:"438 Miller Ave",sow:"SRPR",streetAddress:"438 Miller Ave, Oshawa",taskName:"Drafting",actions:"Field Drafting",jobCode:"CCAD3",plannedHours:" 3.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"3.00",assignedUser:"	Joseph Blackmore",status:"Scheduled",},
    {created:'30-05-2021, 4:20 PM', refNo: 'A-025001', siteName:"Norris Court",sow:"SRPR",streetAddress:"637 Norris Court, Jersey City",taskName:"Drafting",actions:"Research Request",jobCode:"PA1",plannedHours:" 2.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"2.00",assignedUser:"Bob Cormier",status:"Scheduled",},                                                           
    {created:'12-12-2021, 6:00 PM', refNo: 'A-025007', siteName:"Uptown Cyberabad Building",sow:"SRPR",streetAddress:"Uptown Cyberabad Building , Hyderabad",taskName:"Drafting",actions:"Field Drafting",jobCode:"CCAD4",plannedHours:"4.00 ",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"4.00",assignedUser:"	Joseph Blackmore",status:"Scheduled",},                                                           
    
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
