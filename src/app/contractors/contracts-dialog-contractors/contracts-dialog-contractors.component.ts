import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contracts-dialog-contractors',
  templateUrl: './contracts-dialog-contractors.component.html',
  styleUrls: ['./contracts-dialog-contractors.component.scss']
})
export class ContractsDialogContractorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractsDialogContractorsComponent>) { }

  ngOnInit() {
  }

  values = [
    {completion:"90%",contractname:"MRC",client:"Robert",startDate:"14-09-2020",targetDate:"12-12-2020",status:"In Progress"},
    {completion:"85%",contractname:"MPK",client:"John",startDate:"14-09-2020",targetDate:"12-12-2020",status:"Pending"},
    {completion:"70%",contractname:"Beacon",client:"Singh",startDate:"14-09-2020",targetDate:"12-12-2020",status:"Pending"}
  ]

  close(){
    this.dialogRef.close();
  }

}