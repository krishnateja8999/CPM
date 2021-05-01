import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-machinery-upload',
  templateUrl: './add-machinery-upload.component.html',
  styleUrls: ['./add-machinery-upload.component.scss']
})
export class AddMachineryUploadComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddMachineryUploadComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
