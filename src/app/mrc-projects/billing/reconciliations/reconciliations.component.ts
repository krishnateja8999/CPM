import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddPhysicalStockDialogComponent} from './add-physical-stock-dialog/add-physical-stock-dialog.component';
import {ViewItemsDialogComponent} from './view-items-dialog/view-items-dialog.component';

@Component({
  selector: 'app-reconciliations',
  templateUrl: './reconciliations.component.html',
  styleUrls: ['./reconciliations.component.scss']
})
export class ReconciliationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;

  values:any = [
    {date:"23-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:503,variance:7,loss:"$12,000"},
    {date:"21-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:497,variance:25,loss:"$4,000"},
    {date:"18-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:520,variance:10,loss:"$1000"}
  ]

  openPhysicalStock(){
    let dialogRef = this.dialog.open(AddPhysicalStockDialogComponent,{
      height: 'auto',
      width: '700px',
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openItems(){
    let dialogRef = this.dialog.open(ViewItemsDialogComponent,{
      height: 'auto',
      width: '800px',
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
