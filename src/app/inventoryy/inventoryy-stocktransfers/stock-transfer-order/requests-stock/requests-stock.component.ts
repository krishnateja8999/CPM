import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStockTransferComponent } from './add-stock-transfer/add-stock-transfer.component';

@Component({
  selector: 'app-requests-stock',
  templateUrl: './requests-stock.component.html',
  styleUrls: ['./requests-stock.component.scss']
})
export class RequestsStockComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
values=[
  {sino:'1',stocktransferno:'STO/OTP-OM/OCT-19/10001',date:'07-Oct-2019',reqtitle:'CHECK IF STOCK UPDATED FROM OPENING STOCK IS REFLECTTING OR NOT',project:'Singrauli',category:'Spare Parts',requestedItems:'2',approvedItems:'2',status:'Approved'},
  {sino:'2',stocktransferno:'STO/OTP-OM/OCT-19/10004',date:'14-Oct-2019',reqtitle:'NEED 120 ITEMS',project:'Singrauli',category:'Spare Parts',requestedItems:'1',approvedItems:'0',status:'Pending for Approval'},
  {sino:'3',stocktransferno:'STO/OTP-OM/OCT-19/10005',date:'15-Oct-2019',reqtitle:'CHECK RC CONDITIONS',project:'Singrauli',category:'Spare Parts',requestedItems:'1',approvedItems:'1',status:'Delayed'},
  {sino:'4',stocktransferno:'STO/OTP-OM/OCT-19/10007',date:'21-Oct-2019',reqtitle:'EREWRT',project:'Singrauli',category:'Materials',requestedItems:'1',approvedItems:'0',status:'Delayed'},
  {sino:'5',stocktransferno:'STO/OTP-OM/OCT-19/10008',date:'21-Oct-2019',reqtitle:'MATERIAL LOCATION CHECK, STOCK TRANSFER, GRN AND CONSIGNMENTS',project:'Singrauli',category:'Materials',requestedItems:'1',approvedItems:'0',status:'Pending for Approval'},
  {sino:'6',stocktransferno:'STO/ST-OM/APR-20/10002',date:'15-Apr-2020',reqtitle:'REQUIRED 50 ITEMS',project:'Stock Jharkhand',category:'Materials',requestedItems:'0',approvedItems:'0',status:'Pending for Submission'},
  {sino:'7',stocktransferno:'STO/ST-OM/APR-20/10003',date:'15-Apr-2020',reqtitle:'REQUIRED 200 ITEMS',project:'Stock Jharkhand',category:'Materials',requestedItems:'0',approvedItems:'0',status:'Pending for Submission'},
  {sino:'8',stocktransferno:'STO/DOB-OM/APR-20/10004',date:'15-Apr-2020',reqtitle:'REQUIRED 500 ITEMS',project:'Dobari Test Project',category:'Spare Parts',requestedItems:'0',approvedItems:'0',status:'Pending for Submission'},
  {sino:'9',stocktransferno:'STO/LGP-OM/FEB-21/10007',date:'07-Feb-2021',reqtitle:'NEED 10 ITEM',project:'Legacy Project',category:'Spare Parts',requestedItems:'1',approvedItems:'1',status:'Approved'},
  {sino:'10',stocktransferno:'STO/LGP-OM/FEB-21/10008',date:'19-Feb-2021',reqtitle:'NEEED 100 ITEMS AT NEW SITE',project:'Legacy Project',category:'Spare Parts',requestedItems:'0',approvedItems:'0',status:'Pending for Submission'},
]
openstocktransfer(){
  this.dialog.open(AddStockTransferComponent,{
    width:"600px",
    height:"auto"
  })
}
}
