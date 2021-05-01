import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.scss']
})
export class SparepartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {reqNo:'OM/REQ/SPA-JAN-19/1010',reqDate:'05-01-2021',reqTitle:'URGENT NEED FOR 200 ITEMS',reqCategory:'Backhoe Loader Accident Repairs',make:'Tata | All Models',project:'Option Matrix',viewItems:'1',highApprovals:'1',approvals:'view',reqBy:'	31-01-2021',review:'Pending'},
    {reqNo:'OM/REQ/SPA-JAN-19/1018',reqDate:'16-01-2021',reqTitle:'REQUIRED 500 ITEMS AT NEW PROJECT',reqCategory:'Backhoe Loader Breakdown Repairs',make:'Tata | D85ESS 86',project:'Option Matrix',viewItems:'2',highApprovals:'2',approvals:'view',reqBy:'	05-02-2021',review:'Pending'},
  ]
}
