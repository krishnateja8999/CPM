import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMachineryUploadComponent } from '../dumper-machinery/add-machinery-upload/add-machinery-upload.component';

@Component({
  selector: 'app-dumper-primary',
  templateUrl: './dumper-primary.component.html',
  styleUrls: ['./dumper-primary.component.scss']
})
export class DumperPrimaryComponent implements OnInit {

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
