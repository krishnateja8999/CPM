import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddGatepassComponent } from './add-gatepass/add-gatepass.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openAddGatepass(){
    this.dialog.open(AddGatepassComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
