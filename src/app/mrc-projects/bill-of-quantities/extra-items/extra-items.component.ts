import { AddExtraitemComponent } from './add-extraitem/add-extraitem.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-extra-items',
  templateUrl: './extra-items.component.html',
  styleUrls: ['./extra-items.component.scss']
})
export class ExtraItemsComponent implements OnInit {


  filterToggle:boolean;

  items=[
    {"serial":"3.1","category":"Electrical","description":"Wires","unit":"Pcs","qtyproposed":"150","qtyapproved":"125","rateproposed":"$5000","rateapproved":"$450","status":"Approved", "ItemNo": 511,"letterNo":"1","submitedOn":"12-09-2019","revertedOn":"05-12-2019"},
    {"serial":"3.2","category":"Electrical","description":"Sockets","unit":"Pcs","qtyproposed":"170","qtyapproved":"130","rateproposed":"$6500","rateapproved":"$500","status":"Approved", "ItemNo": 647,"letterNo":"2","submitedOn":"12-09-2019","revertedOn":"05-12-2019"},
    {"serial":"4.1","category":"Mechanical","description":"Bench","unit":"Pcs","qtyproposed":"180","qtyapproved":"120","rateproposed":"$7000","rateapproved":"$600","status":"Pending", "ItemNo": 345,"letterNo":"3","submitedOn":"12-09-2019","revertedOn":"05-12-2019"},
    {"serial":"4.2","category":"Mechanical","description":"Screw","unit":"Pcs","qtyproposed":"110","qtyapproved":"70","rateproposed":"$6500","rateapproved":"$500","status":"Approved", "ItemNo": 457,"letterNo":"4","submitedOn":"12-09-2019","revertedOn":"05-12-2019"},
    {"serial":"5.1","category":"Plumbing","description":"Tap","unit":"Pcs","qtyproposed":"170","qtyapproved":"135","rateproposed":"$7500","rateapproved":"$600","status":"Declined", "ItemNo": 856,"letterNo":"5","submitedOn":"12-09-2019","revertedOn":"05-12-2019"}
  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddExtraitemComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opencontactDialog1(item) {
  let dialogRef = this.dialog.open(AddExtraitemComponent, {
      data: item,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
