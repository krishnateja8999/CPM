import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-outgoing-stock',
  templateUrl: './outgoing-stock.component.html',
  styleUrls: ['./outgoing-stock.component.scss']
})
export class OutgoingStockComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
   {stoNo:'STO/OM-OTP/OCT-19/10003',date:'12-Oct-2019',stoTitle:'NEED 200 ITEMS IMME ...',categeory:'Spare Parts',stoItem:'2 | 7',dispatchItem:'1 | 7',foreClose:'Foreclose',dispatchDetails:'0',approvals:'View'}
  ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}