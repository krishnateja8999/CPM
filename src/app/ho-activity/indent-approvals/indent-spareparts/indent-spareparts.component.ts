import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indent-spareparts',
  templateUrl: './indent-spareparts.component.html',
  styleUrls: ['./indent-spareparts.component.scss']
})
export class IndentSparepartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {indNo:'OM/REQ/SPA-FEB-19/1050',indDate:'18-02-2021',indTitle:'	NEED 100 SPARES',indCategory:'Backhoe Loader Breakdown Repairs(emergency)',make:'Tata | D85ESS 86',viewItems:'4',approvals:'view',reqBy:'	28-02-2021',amount:'	6093000.00'},
    {indNo:'OM/REQ/SPA-MAR-19/1058',indDate:'04-03-2021',indTitle:'	NEED 100 ITEM IMMEDIATELY',indCategory:'Bulldozer Accident Repairs',make:'Caterpillar | D6R2',viewItems:'3',approvals:'view',reqBy:'	27-04-2021',amount:'47880.00'},
  ]
}
