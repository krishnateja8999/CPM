import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-hours',
  templateUrl: './project-hours.component.html',
  styleUrls: ['./project-hours.component.scss']
})
export class ProjectHoursComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'03-02-2021',userName:'Super Admin',jobCode:'PM (Project Manager)',site:'Sipcot Industrial Park',sow:'SRPR',task:'Quality Control',action:'-',actionStatus:'-',PlanedHrs:'0.00',AssignedHrs:'0.00',WorkedHrs:'0.20',RemHrs:'0.00',actual:'$200.00',notes:'NA',dueDate:'-',manage:'',createdDate:'03-02-2021, 7:44 PM'}
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
