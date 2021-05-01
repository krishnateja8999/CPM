import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ItemsDialogComponent } from './items-dialog/items-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sc-ra-bills',
  templateUrl: './sc-ra-bills.component.html',
  styleUrls: ['./sc-ra-bills.component.scss']
})
export class SCRABillsComponent implements OnInit {

  items=[
    { "Sub_Contractor" : "ABC Ltd", "Date_Time" : "14-Aug-2018","Subject" : "First Floor Pantry", "Bill" : "56","Billed" : "$15,000","Items":"4", "Paid" : "$10,000","Status" : "Active"},
    { "Sub_Contractor" : "DEF Ltd", "Date_Time" : "10-Jan-2015","Subject" : "First Floor Pantry", "Bill" : "87","Billed" : "$57,120","Items":"4", "Paid" : "$57,120","Status" : "Active"},
    { "Sub_Contractor" : "SR Ltd", "Date_Time" : "22-Oct-2014","Subject" : "First Floor Pantry", "Bill" : "84","Billed" : "$67,222","Items":"4", "Paid" : "$50,000","Status" : "Active"},
    { "Sub_Contractor" : "MD Ltd", "Date_Time" : "8-Jun-2019","Subject" : "First Floor Pantry", "Bill" : "93","Billed" : "$30,000","Items":"4", "Paid" : "$30,000","Status" : "Active"},
    { "Sub_Contractor" : "KL Ltd", "Date_Time" : "1-Dec-2012","Subject" : "First Floor Pantry", "Bill" : "35","Billed" : "$15,122","Items":"4", "Paid" : "$10,000","Status" : "Active"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;

  public openAddBill() {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openItemsDialog() {
    let dialogRef = this.dialog.open(ItemsDialogComponent, {
      
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
