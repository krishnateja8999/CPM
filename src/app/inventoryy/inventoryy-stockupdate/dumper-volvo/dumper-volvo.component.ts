import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMachineryUploadComponent } from '../dumper-machinery/add-machinery-upload/add-machinery-upload.component';

@Component({
  selector: 'app-dumper-volvo',
  templateUrl: './dumper-volvo.component.html',
  styleUrls: ['./dumper-volvo.component.scss']
})
export class DumperVolvoComponent implements OnInit {

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
