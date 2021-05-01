import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUploadExcelComponent } from './add-upload-excel/add-upload-excel.component';

@Component({
  selector: 'app-sparepart-opening',
  templateUrl: './sparepart-opening.component.html',
  styleUrls: ['./sparepart-opening.component.scss']
})
export class SparepartOpeningComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
item=[
  {stockingDate:'12-Oct-2019',totalItems:'2',importedItems:'1',exceptions:'0',remarks:'Generate OTP to Mobile (Send) | Email (Send)',importedBy:'Super Admin',uploadedDate:'	12-Oct-2019, 03:21 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'0',exceptions:'0',remarks:'TH 87',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 03:18 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'11',importedItems:'1',exceptions:'1',remarks:'Generate OTP to Mobile (Send) | Email (Send)',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 03:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'0',exceptions:'0',remarks:'EAS10036 - importing part into different location',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 03:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'1',remarks:'na',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 02:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'1',remarks:'Uploading qty to same part',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 03:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'65',importedItems:'2',exceptions:'1',remarks:'Importing quantity for same part with different part make',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 04:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'23',importedItems:'16',exceptions:'0',remarks:'Importing data for Part - EAS10002',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 01:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'16',exceptions:'30',remarks:'uploading duplicate file',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 04:16 PM'},
  {stockingDate:'12-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'30',remarks:'importing file with 47 scenarios covering both positive and negative',importedBy:'Super Admin',uploadedDate:'12-Oct-2019, 06:16 PM'},

]
openUploadExcel(){
  this.dialog.open(AddUploadExcelComponent,{
    width:"600px",
    height:"auto"
  })
}
}
