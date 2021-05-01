import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRequisitionDialogComponent } from './add-requisition-dialog/add-requisition-dialog.component';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  values = [
    {requisition:'HO/REQ-JAN-19-20/001',requisitionTitle:'NEED 100 ITEMS',items:'0',type:'item',requestedBy:'Super Admin', requiredBy:'31-03-2021'},
    {requisition:'HO/REQ-MAR-21-22/001',requisitionTitle:'NEED 150 ITEMS AT OTHER SITE',items:'0',type:'item',requestedBy:'Super Admin', requiredBy:'02-04-2021'},
    {requisition:'HO/REQ-MAR-21-22/003',requisitionTitle:'URGENT NEED OF ITEMS AT LEGACY SITE...',items:'0',type:'item',requestedBy:'Super Admin', requiredBy:'28-05-2021'}

  ]
  openAddRequisition(){
    this.dialog.open(AddRequisitionDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
