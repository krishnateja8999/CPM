import { Settings } from './../../../app.settings.model';
import { AppSettings } from './../../../app.settings';
import { AddDeviationComponent } from './add-deviation/add-deviation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpBoqComponent } from './up-boq/up-boq.component';


@Component({
  selector: 'app-deviation-items',
  templateUrl: './deviation-items.component.html',
  styleUrls: ['./deviation-items.component.scss']
})
export class DeviationItemsComponent implements OnInit {

  
  
  public single: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true;

  items=[
    {"serial":"1.1","category":"Electrical","description":"Wires","LetterNo":"1","unit":"Pcs","qtyproposed":"150","qtyapproved":"125","rateproposed":"$5000","rateapproved":"$450","status":"Approved","submitedOn":"12-09-2019","revertedOn":"21-09-2019","ItemNo": 224},
    {"serial":"1.2","category":"Electrical","description":"Sockets","LetterNo":"2","unit":"Pcs","qtyproposed":"170","qtyapproved":"130","rateproposed":"$5550","rateapproved":"$500","status":"Approved","submitedOn":"18-02-2019","revertedOn":"25-02-2019","ItemNo": 455},
    {"serial":"2.1","category":"Mechanical","description":"Bench","LetterNo":"3","unit":"Pcs","qtyproposed":"180","qtyapproved":"120","rateproposed":"$5600","rateapproved":"$600","status":"Pending","submitedOn":"02-10-2019","revertedOn":"05-10-2019","ItemNo": 876},
    {"serial":"2.2","category":"Mechanical","description":"Screw","LetterNo":"4","unit":"Pcs","qtyproposed":"110","qtyapproved":"70","rateproposed":"$7650","rateapproved":"$500","status":"Approved","submitedOn":"23-04-2019","revertedOn":"30-04-2019","ItemNo": 457},
    {"serial":"3.1","category":"Plumbing","description":"Tap","LetterNo":"5","unit":"Pcs","qtyproposed":"170","qtyapproved":"135","rateproposed":"$7800","rateapproved":"$600","status":"Declined","submitedOn":"11-01-2019","revertedOn":"18-01-2019","ItemNo": 526}
  ]

  constructor(public dialog:MatDialog,public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Proposed',
        value: 200
      },
      {
        name: 'Approved',
        value: 149
      },
     
    ];
    const singles = [
      {
        name: 'Approved',
        value: 20
      },
      {
        name: 'Pending',
        value: 33
      },
      {
        name: 'Declined',
        value: 21
      }
     
    ];
    Object.assign(this, {single,singles}); 
  }

  ngOnInit() {
  }

  public onSelect(event) {
    console.log(event);
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddDeviationComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opencontactDialog3(item) {
  let dialogRef = this.dialog.open(AddDeviationComponent, {
      data: item,
      height: 'auto',
      width: '600px'
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

}
