import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-unbilled',
  templateUrl: './project-unbilled.component.html',
  styleUrls: ['./project-unbilled.component.scss']
})
export class ProjectUnbilledComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
items=[
  {site:'Sipcot Industrial Park',sow:'SRPR',awarded:'No',task:'-',action:'-',jobCode:'-',expensesCode:'-',worked:'-',total:'-',expense:'-',budgetTotal:'$6,845.70',quotedTotal:'$6,846.00',unbilled:'	$3,423.00',userName:'-',date:'-'}
]
filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}
}