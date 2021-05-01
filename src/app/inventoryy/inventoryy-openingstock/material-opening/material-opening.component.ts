import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUploadExcellComponent } from './add-upload-excell/add-upload-excell.component';

@Component({
  selector: 'app-material-opening',
  templateUrl: './material-opening.component.html',
  styleUrls: ['./material-opening.component.scss']
})
export class MaterialOpeningComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  item=[
    {stockingDate:'18-Oct-2019',totalItems:'2',importedItems:'1',exceptions:'0',remarks:'na',importedBy:'Super Admin',uploadedDate:'	18-Oct-2019, 03:21 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'1',importedItems:'0',exceptions:'0',remarks:'na',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 03:18 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'11',importedItems:'1',exceptions:'1',remarks:'na',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 03:16 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'1',importedItems:'0',exceptions:'0',remarks:'Generate OTP to',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 03:16 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'1',remarks:'	Approve Stock',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 02:16 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'1',remarks:'Bn 1 - Generate OTP to Mobile (Send) | Email (Send)',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 03:16 PM'},
    {stockingDate:'18-Oct-2019',totalItems:'65',importedItems:'2',exceptions:'1',remarks:'na',importedBy:'Super Admin',uploadedDate:'18-Oct-2019, 04:16 PM'},
    {stockingDate:'17-Oct-2019',totalItems:'5',importedItems:'5',exceptions:'0',remarks:'uploading 5 records',importedBy:'Super Admin',uploadedDate:'17-Oct-2019, 01:16 PM'},
    {stockingDate:'17-Oct-2019',totalItems:'1',importedItems:'16',exceptions:'30',remarks:'enerate OTP to Mobile (Send) | Email (Send)',importedBy:'Super Admin',uploadedDate:'17-Oct-2019, 04:16 PM'},
    {stockingDate:'17-Oct-2019',totalItems:'1',importedItems:'1',exceptions:'30',remarks:'uploading 27 records',importedBy:'Super Admin',uploadedDate:'17-Oct-2019, 06:16 PM'},
  
  ]
  openUploadExcell(){
    this.dialog.open(AddUploadExcellComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
