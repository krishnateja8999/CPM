import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'

import {AddContractorDialogComponent} from './add-contractor-dialog/add-contractor-dialog.component';
import {GridColumnsContractorsDialogComponent} from './grid-columns-contractors-dialog/grid-columns-contractors-dialog.component';
import {ContractsDialogContractorsComponent} from './contracts-dialog-contractors/contracts-dialog-contractors.component';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contractor:"GV Contractors",contact:"Ritesh",email:"ritesh@gvc.com",phone:"9978515470",address:"Sector 42",city:"Gurgram",state:"Haryana",country:"India",postalcode:"507032",contratcs:"8",date:"15-12-2019",status:"Active"},
    {contractor:"HBVC Systems",contact:"Arpit",email:"arpit@hbvc.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",contratcs:"15",date:"19-11-2019",status:"Inactive"},
    {contractor:"ABC Contractors",contact:"Kabeer",email:"kabeer@abc.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",contratcs:"12",date:"04-11-2019",status:"Active"},
    {contractor:"HBVC Systems",contact:"Arpit",email:"arpit@hbvc.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",country:"India",postalcode:"507032",contratcs:"15",date:"19-11-2019",status:"Inactive"},
    {contractor:"ABC Contractors",contact:"Kabeer",email:"kabeer@abc.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",country:"India",postalcode:"507032",contratcs:"12",date:"04-11-2019",status:"Active"}


  ]

  openGridColumnsDialog(){
    this.dialog.open(GridColumnsContractorsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openAddContractorDialog(){
    this.dialog.open(AddContractorDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogContractorsComponent,{
      width:"500px",
      height:"auto"
    })
  }

  public openAddCategory2(items){
    let dialogRef = this.dialog.open(AddContractorDialogComponent, {
      data:items,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

}
