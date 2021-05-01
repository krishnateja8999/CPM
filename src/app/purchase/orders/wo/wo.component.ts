import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddwoComponent } from './addwo/addwo.component';

@Component({
  selector: 'app-wo',
  templateUrl: './wo.component.html',
  styleUrls: ['./wo.component.scss']
})
export class WoComponent implements OnInit {
  items=[
    { "PO" : "15-11-2020" ,"Ref" :"WO/MRC/151","Sub":"XYZ Limited","Subject" :"Electrical","Description" :"Used for wiring purpose","WO":"20-11-2020","WOD":"View","Status" : "Pending"},
    { "PO" : "18-01-2019" ,"Ref" :"WO/MRC/146","Sub":"Birla","Subject" :"Plumbing","Description" :"Used for pipes ","WO":"18-01-2020","WOD":"View","Status" : "Approved"},
    { "PO" : "19-10-2005" ,"Ref" :"WO/MRC/157","Sub":"Damro","Subject" :"Civil","Description" :"Used for cement mixing","WO":"19-10-2006","WOD":"View","Status" : "Pending"},
    { "PO" : "15-11-2020" ,"Ref" :"WO/MRC/171","Sub":"Reliance","Subject" :"Furniture","Description" :"Used in Furniture purpose","WO":"20-11-2020","WOD":"View","Status" : "Approved"},
    { "PO" : "01-12-2009" ,"Ref" :"WO/MRC/172","Sub":"Ambuja","Subject" :"Electrical","Description" :"Used for wiring purpose","WO":"01-12-2009","WOD":"View","Status" : "Pending"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openadd(){
    let dialogRef = this.dialog.open(AddwoComponent, {
     
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
