import { AddDebitNoteComponent } from './add-debit-note/add-debit-note.component';
import { AddAdvanceComponent } from './add-advance/add-advance.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDocsComponent } from '../../../shared/show-docs/show-docs.component';
@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.scss']
})
export class SCComponent implements OnInit {
  items=[
    {"subcontractor":"M/s Power Solutions","date":"13-09-2020","subject":"Short Supply","amount":"$15,000","description":"Shortage in shipment","type":"Debit Note","docs":"3"},
    {"subcontractor":"Bharath Powers","date":"11-09-2020","subject":"Sufficient Supply","amount":"$17,650","description":"Enough shipment","type":"Advance","docs":"3"},
    {"subcontractor":"Tata Steels","date":"3-09-2020","subject":"Short Supply","amount":"$1414","description":"Shortage in shipment","type":"Advance","docs":"3"},
    {"subcontractor":"First Choice Pvt Ltd","date":"18-07-2020","subject":"Sufficient Supply","amount":"$12,120","description":"Enough Shipment","type":"Debit Note","docs":"3"},
    {"subcontractor":"Relience Steel","date":"23-09-2020","subject":"Short Supply","amount":"$10,000","description":"Shortage in shipment","type":"Debit Note","docs":"3"}
    
    ]
    
    filterToggle:boolean;
  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddAdvanceComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public opendebitDialog() {
  let dialogRef = this.dialog.open(AddDebitNoteComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
public showdocs() {
  let dialogRef = this.dialog.open(ShowDocsComponent, {
  
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
