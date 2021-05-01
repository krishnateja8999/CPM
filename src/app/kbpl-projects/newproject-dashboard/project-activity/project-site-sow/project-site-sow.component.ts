import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-site-sow',
  templateUrl: './project-site-sow.component.html',
  styleUrls: ['./project-site-sow.component.scss']
})
export class ProjectSiteSowComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',status:'-',type:'Site',site:'-',refno:'001 Default',remarks:'New Site Created',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Created',status:'Open',type:'SOW',site:'001 Default',refno:'A Default',remarks:'New SOW Created',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Updated',status:'-',type:'Site',site:'-',refno:'001 Sipcot Industrial Park',remarks:'Site name updated',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Updated',status:'Open',type:'SOW',site:'001 Sipcot Industrial Park',refno:'A SRPR',remarks:'SOW name updated',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Updated',status:'-',type:'SOW',site:'001 Sipcot Industrial Park',refno:'	A SRPR',remarks:'Budget saved and the quoted value is $6,846.00',updatedBy:'Super Admin'},
    {date:'29-03-2021, 8:05 PM',operation:'Updated',status:'Awarded',type:'SOW',site:'001 Sipcot Industrial Park',refno:'	A SRPR',remarks:'SOW awarded',updatedBy:'Super Admin'},
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
