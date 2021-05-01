import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPaymentDialogComponent } from './add-payment-dialog/add-payment-dialog.component';
import { MeasurementBookDialogComponent } from './measurement-book-dialog/measurement-book-dialog.component';

@Component({
  selector: 'app-ra-bills',
  templateUrl: './ra-bills.component.html',
  styleUrls: ['./ra-bills.component.scss']
})
export class RaBillsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log("client ra works");
  }

  values: any = [
    {serial:"1.1.2",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Pcs",target:"126",previousq:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",collection:"11000",notes:"Make deployed is Orient",status:"Active"},
    {serial:"1.1.3",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Pcs",target:"126",previousq:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",collection:"11000",notes:"Make deployed is Orient",status:"Inactive"},
    {serial:"1.1.4",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Pcs",target:"126",previousq:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",collection:"11000",notes:"Make deployed is Orient",status:"Active"},
    {serial:"1.1.5",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Pcs",target:"126",previousq:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",collection:"11000",notes:"Make deployed is Orient",status:"Inactive"}
  ]

  openMeasurementBook(assets){
    let dialogRef = this.dialog.open(MeasurementBookDialogComponent, {
      data: assets,
      height: 'auto',
      width: '700px',
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openAddPayment(assets){
    let dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      data: assets,
      height: 'auto',
      width: '700px',
      autoFocus: false,
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  

  

}