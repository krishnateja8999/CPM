import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-upload-excell',
  templateUrl: './add-upload-excell.component.html',
  styleUrls: ['./add-upload-excell.component.scss']
})
export class AddUploadExcellComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddUploadExcellComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
