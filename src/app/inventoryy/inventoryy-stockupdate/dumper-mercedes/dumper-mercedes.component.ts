import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMachineryUploadComponent } from '../dumper-machinery/add-machinery-upload/add-machinery-upload.component';

@Component({
  selector: 'app-dumper-mercedes',
  templateUrl: './dumper-mercedes.component.html',
  styleUrls: ['./dumper-mercedes.component.scss']
})
export class DumperMercedesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openUploadExcell(){
    this.dialog.open(AddMachineryUploadComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
