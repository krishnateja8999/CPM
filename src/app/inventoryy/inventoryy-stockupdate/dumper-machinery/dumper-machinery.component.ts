import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMachineryUploadComponent } from './add-machinery-upload/add-machinery-upload.component';

@Component({
  selector: 'app-dumper-machinery',
  templateUrl: './dumper-machinery.component.html',
  styleUrls: ['./dumper-machinery.component.scss']
})
export class DumperMachineryComponent implements OnInit {

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
