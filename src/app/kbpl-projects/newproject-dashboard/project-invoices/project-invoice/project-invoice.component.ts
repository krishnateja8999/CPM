import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-invoice',
  templateUrl: './project-invoice.component.html',
  styleUrls: ['./project-invoice.component.scss']
})
export class ProjectInvoiceComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
items=[
  {azInvoiceNo:'A-025011-Inv001',officialInvoiceNo:'-',invoiceTotal:'$3,867.99',balanceAmount:'$3,000.00',invoiceDate:'09-02-2021',daysOld:'51',invoiceStatus:'send',activityDate:'25-02-2021',sentTo:'-',sentBy:'-',createdDate:'09-04-2021',sendDate:'-', stageColour: '#00ff0040',"Status": 1}
]
statusOptions = [
  {value:1, name: 'send', colorCode: '#00ff0040'},
  {value:2, name: 'New', colorCode: '#C0C0C0'},
  {value:3, name: 'Revised', colorCode: '#87CEFA'},
]
filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}
}
