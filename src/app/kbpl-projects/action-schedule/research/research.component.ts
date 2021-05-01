import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  items=[
    {created:'02-03-2021, 8:18 PM', refNo: 'A-025012', siteName:"274 Clyde St.",sow:"Final As-Built Survey",streetAddress:"167 William Fair Drive, Darlington",taskName:"Research",actions:"Field Design",jobCode:"EPC1",plannedHours:" 2.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"2.00",assignedUser:"	Kenneth McKee",status:"Completed",},
    {created:'22-01-2021, 1:45 PM', refNo: 'A-025017', siteName:"Uptown Cyberabad Building",sow:"Topography",streetAddress:"	Uptown Cyberabad Building , Hyderabad",taskName:"Research",actions:"	Project Setup",jobCode:"	PA1",plannedHours:" 2.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"2.00",assignedUser:"Emilio William",status:"Pending",},
    {created:'30-05-2021, 4:20 PM', refNo: 'A-025012', siteName:"274 Clyde St.",sow:"Final As-Built Survey",streetAddress:"167 William Fair Drive, Darlington",taskName:"Research",actions:"Field QC",jobCode:"FQC",plannedHours:" 4.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"4.00",assignedUser:"	Bob Cormier",status:"On Hold",},                                                           
    {created:'12-12-2021, 6:00 PM', refNo: 'A-025012', siteName:"274 Clyde St.",sow:"Final As-Built Survey",streetAddress:"	167 William Fair Drive, Darlington",taskName:"Research",actions:"	Project Setup",jobCode:"	PA1",plannedHours:"3.00 ",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"3.00",assignedUser:"Bob Cormier",status:"Completed",},                                                           
    {created:'09-05-2021, 2:00 PM', refNo: 'A-025004', siteName:"Norris Court",sow:"SRPR",streetAddress:"	637 Norris Court, Jersey City",taskName:"Research",actions:"	Project Setup",jobCode:"	PA1",plannedHours:" 1.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"1.00",assignedUser:"Joseph Blackmore",status:"Completed",},                                                           
    {created:'24-10-2021, 12:28 PM', refNo: 'A-025022', siteName:"Complex Avenue",sow:"Topo",streetAddress:"10/1 Complex Avenue, Jersey City",taskName:"Research",actions:"	Project Setup",jobCode:"	PA1",plannedHours:" 4.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"4.00",assignedUser:"Kenneth McKee",status:"Pending"}, 
    {created:'02-03-2021, 8:18 PM', refNo: 'A-025012', siteName:"438 Miller Ave",sow:"SRPR",streetAddress:"	438 Miller Ave, Oshawa",taskName:"Research",actions:"	Project Setup",jobCode:"	PA1",plannedHours:" 2.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"2.00",assignedUser:"Cris Leduc",status:"Completed",},   
    {created:'22-01-2021, 1:45 PM', refNo: 'A-025017', siteName:"Uptown Cyberabad Building",sow:"SRPR",streetAddress:"	Uptown Cyberabad Building , Hyderabad",taskName:"Research",actions:"Project Setup",jobCode:"	PA1",plannedHours:" 1.00",dueDate:"12-02-2020",scheduleDate:"12-02-2020",assignedHours:"1.00",assignedUser:"Emilio William",status:"Pending",},                                                                                                                                                                             
    
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
