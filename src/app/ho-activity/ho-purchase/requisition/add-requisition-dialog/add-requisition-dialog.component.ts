import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MrcAddProjectDialogComponent } from 'src/app/mrc-projects/project-management/mrc-add-project-dialog/mrc-add-project-dialog.component';

@Component({
  selector: 'app-add-requisition-dialog',
  templateUrl: './add-requisition-dialog.component.html',
  styleUrls: ['./add-requisition-dialog.component.scss']
})
export class AddRequisitionDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddRequisitionDialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
