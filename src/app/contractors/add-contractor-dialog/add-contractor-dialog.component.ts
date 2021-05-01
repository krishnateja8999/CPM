import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-contractor-dialog',
  templateUrl: './add-contractor-dialog.component.html',
  styleUrls: ['./add-contractor-dialog.component.scss']
})
export class AddContractorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddContractorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
