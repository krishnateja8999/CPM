import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-gatepass',
  templateUrl: './add-gatepass.component.html',
  styleUrls: ['./add-gatepass.component.scss']
})
export class AddGatepassComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddGatepassComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
