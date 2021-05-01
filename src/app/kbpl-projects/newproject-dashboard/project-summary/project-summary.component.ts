import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }

  items=[
    {name:'A SRPR',awardDate:'25-02-2021',awardBy:'Super Admin',close:'-',quoted:'$6,846.00',awarded:'-',actual:'$0.00',profit:'$6,846.00',invoiced:'$3,423.00',invoice:'-'},
    {name:'Quote',awardDate:'-',awardBy:'-',close:'-',quoted:'$1,100.00',awarded:'-',actual:'$0.00',profit:'$1,100.00',invoiced:'-',invoice:'-'},
    {name:'Administration',awardDate:'-',awardBy:'-',close:'-',quoted:'$300.00',awarded:'-',actual:'$0.00',profit:'$300.00',invoiced:'-',invoice:'-'},
    {name:'Research',awardDate:'-',awardBy:'-',close:'-',quoted:'$560.00',awarded:'-',actual:'$0.00',profit:'$560.00',invoiced:'-',invoice:'-'},
    {name:'Field',awardDate:'-',awardBy:'-',close:'-',quoted:'$815.00',awarded:'-',actual:'$0.00',profit:'$815.00',invoiced:'-',invoice:'-'},
    {name:'Drafting',awardDate:'-',awardBy:'-',close:'-',quoted:'$310.00',awarded:'-',actual:'$0.00',profit:'$310.00',invoiced:'-',invoice:'-'},
    {name:'Quality Control',awardDate:'-',awardBy:'-',close:'-',quoted:'$350.00',awarded:'-',actual:'$0.00',profit:'$350.00',invoiced:'-',invoice:'-'},
    {name:'Management',awardDate:'-',awardBy:'-',close:'-',quoted:'$100.00',awarded:'-',actual:'$0.00',profit:'$100.00',invoiced:'-',invoice:'-'},
    {name:'Calculations',awardDate:'-',awardBy:'-',close:'-',quoted:'$170.00',awarded:'-',actual:'$0.00',profit:'$170.00',invoiced:'-',invoice:'-'},
    {name:'Expenses',awardDate:'-',awardBy:'-',close:'-',quoted:'	$3,140.70',awarded:'-',actual:'$0.00',profit:'$3,140.70',invoiced:'-',invoice:'-'},
    
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

}
