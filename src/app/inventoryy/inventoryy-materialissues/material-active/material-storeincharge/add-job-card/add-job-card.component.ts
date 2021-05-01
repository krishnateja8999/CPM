import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddRequisitionDialogComponent } from 'src/app/ho-activity/ho-purchase/requisition/add-requisition-dialog/add-requisition-dialog.component';

@Component({
  selector: 'app-add-job-card',
  templateUrl: './add-job-card.component.html',
  styleUrls: ['./add-job-card.component.scss']
})
export class AddJobCardComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddJobCardComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
