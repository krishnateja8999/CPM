import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {reqNo:'OM/REQ/MAT/JUN-19/1030',reqDate:'22-06-2021',reqTitle:'CREATING NEW REQUISITION',reqCategory:'Electrical Excavators',project:'Option Matrix',viewItems:'3',highApprovals:'3',approvals:'view',reqBy:'	24-06-2021',review:'1/3'},
   
  ]
}
