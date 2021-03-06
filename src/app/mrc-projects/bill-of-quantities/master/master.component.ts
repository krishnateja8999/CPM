import { MatDialog } from '@angular/material';
import { UploadBoqComponent } from './upload-boq/upload-boq.component';
import { Component, OnInit } from '@angular/core';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UpBoqComponent } from '../deviation-items/up-boq/up-boq.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

filterToggle:boolean;

edit: true;



  items=[
    {"serial":"3.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"120/173","qty":"670","rate":"$60,000","active":"Yes","billed":"$50,000","paid":"$40,500","process":"12 ","pending":"$9,500", "vcStatus": true},
    {"serial":"4.1","category":"Mechanical","description":"Benches for guests","unit":"350/456","qty":"670","rate":"$6000","active":"Yes","billed":"$4000","paid":"$4000","process":"12 ","pending":"$0", "vcStatus": true},
    {"serial":"5.1","category":"Civil","description":"Slab Work","unit":"220/150","qty":"670","rate":"$15,000","active":"Yes","billed":"$10,000","paid":"$9000","process":"12 ","pending":"$1000","vcStatus": true},
    {"serial":"6.1","category":"Plumbing","description":"Water Pipe","unit":"198/120","qty":"670","rate":"$2000","active":"Yes","billed":"$1000","paid":"$950","process":"12 ","pending":"$50", "vcStatus": true},
    {"serial":"3.2","category":"Electrical","description":"Cooler","unit":"150/280","qty":"670","rate":"$8000","active":"Yes","billed":"$4000","paid":"$4000","process":"12 ","pending":"$0","vcStatus": false},

  ]

  constructor(public dialog:MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;




  public opencontactDialog() {
    let dialogRef = this.dialog.open(UploadBoqComponent, {
        height: 'auto',
        width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public opencontactDialog1() {
  let dialogRef = this.dialog.open(UpBoqComponent, {
      height: 'auto',
      width: '800px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

public openAddCategory(){
  let dialogRef = this.dialog.open(AddCategoryComponent, {
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

public openAddCategory2(items){
  let dialogRef = this.dialog.open(AddCategoryComponent, {
    data:items,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteUser(){
  this.alertService.createAlert('Successfully deleted.', 1);
}

saveStatus() {
  this.alertService.createAlert('Successfully saved.', 1);
}
}
