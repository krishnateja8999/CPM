import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-billed',
  templateUrl: './project-billed.component.html',
  styleUrls: ['./project-billed.component.scss']
})
export class ProjectBilledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items=[
  {site:'Sipcot Industrial Park',sow:'	SRPR',feesStructure:'Fixed Rate',task:'-',action:'-',jobCode:'-',expensesCode:'-',worked:'-',total:'-',expenses:'-',budgetTotal:'	$6,845.70',quotedTotal:'	$6,846.00',billed:'$3,423.00(50.00 %)',remainingUnbilled:'	$3,423.00',invoiceNo:'A-025011-Inv001'}
]
}
