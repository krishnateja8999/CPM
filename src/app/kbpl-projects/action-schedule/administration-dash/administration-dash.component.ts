import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-administration-dash',
  templateUrl: './administration-dash.component.html',
  styleUrls: ['./administration-dash.component.scss']
})
export class AdministrationDashComponent implements OnInit {
  items=[
    {created:'02-03-2021, 8:18 PM', refNo: 'A-025006', siteName:"438 Miller Ave",sow:"SRPR",streetAddress:"438 Miller Ave, Oshawa",taskName:"Administration",actions:"Field Drafting",jobCode:"	CCAD3",plannedHours:" 2.00",dueDate:"12-02-2020",scheduleDate:"12-05-2020",assignedHours:"2.00",assignedUser:"Bob Cormier",status:"Completed",},
    {created:'22-01-2021, 1:45 PM', refNo: 'A-025007', siteName:"Uptown Cyberabad Building",sow:"SRPR",streetAddress:"	Uptown Cyberabad Building , Hyderabad",taskName:"Administration",actions:"Field Drafting",jobCode:"CCAD3",plannedHours:" 2.00",dueDate:"12-01-2020",scheduleDate:"12-04-2020",assignedHours:"2.00",assignedUser:"Cris Leduc",status:"Scheduled",},
    {created:'30-05-2021, 4:20 PM', refNo: 'A-025010', siteName:"Complex Avenue",sow:"SRPR",streetAddress:"10/1 Complex Avenue, Jersey City",taskName:"Administration",actions:"Admin Assitance",jobCode:"AA",plannedHours:" 4.00",dueDate:"22-03-2020",scheduleDate:"22-06-2020",assignedHours:"4.00",assignedUser:"Emilio William",status:"Scheduled",},                                                           
    {created:'12-12-2021, 6:00 PM', refNo: 'A-025017', siteName:"Norris Court",sow:"Topography",streetAddress:"	637 Norris Court, Jersey City",taskName:"Administration",actions:"Admin Assitance",jobCode:"AA",plannedHours:"3.00 ",dueDate:"18-02-2020",scheduleDate:"10-04-2020",assignedHours:"3.00",assignedUser:"Bob Cormier",status:"Scheduled",},                                                           
    {created:'09-05-2021, 2:00 PM', refNo: 'A-025004', siteName:"Norris Court",sow:"SRPR",streetAddress:"	637 Norris Court, Jersey City",taskName:"Administration",actions:"Admin",jobCode:"AA",plannedHours:" 2.00",dueDate:"01-01-2020",scheduleDate:"30-04-2020",assignedHours:"2.00",assignedUser:"Bob Cormier",status:"Scheduled",},                                                         
    
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
