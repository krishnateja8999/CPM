import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RFQComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values = [
    {rfq:'HO/REQ-MAR-21-22/002',title:'IMMEDIATE REQUIREMENT OF 200 SPARES',items:'4',approvedBy:'Super Admin',no:'0',action:'NA'},
    {rfq:'HO/REQ-MAR-21-22/004',title:'REPAIR REQUEST',items:'1',approvedBy:'Super Admin',no:'0',action:'NA'},

  ]
}
