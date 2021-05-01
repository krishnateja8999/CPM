import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-upload-excel',
  templateUrl: './add-upload-excel.component.html',
  styleUrls: ['./add-upload-excel.component.scss']
})
export class AddUploadExcelComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddUploadExcelComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
