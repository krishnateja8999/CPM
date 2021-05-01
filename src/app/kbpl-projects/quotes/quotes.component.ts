import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuotesDialogComponent } from './quotes-dialog/quotes-dialog.component';
import { QuotesGridColDialogComponent } from './quotes-grid-col-dialog/quotes-grid-col-dialog.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  gridCmp: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contracts:"2",projecttype:"Construction", stageColour: '#00ff0040',"Status": 1,projectname:"Raheja",projectcode:"R-025012",contractor:"GV Contracors",contact:"Fine Equipments",projectmanager:"Andrew Jones",phone:"9978515470",address:"Sector 42",setUpDueDate:"09-12-2020",activityDate:"09-12-2020",receivedDate:"02-09-2020",quotedDate:"02-09-2020",dueDate:"02-09-2020",quoted:"$7,000",awarded:"$2000",state:"Haryana",contratcs:"8",date:"15-Dec-2019",status:"Initial"},
    {contracts:"4",projecttype:"Engineering", stageColour: '#C0C0C0',"Status": 2,projectname:"Dr.Reddy's",projectcode:"R-025005",contractor:"HBVC Systems",contact:"Safari Constructions",projectmanager:"James Smith",phone:"9976829180",address:"Vijay Nagar",setUpDueDate:"09-12-2020",activityDate:"09-12-2020",receivedDate:"02-09-2020",quotedDate:"02-09-2020",dueDate:"02-09-2020",quoted:"$7,000",awarded:"$2000",state:"Karnataka",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {contracts:"1",projecttype:"Engineering", stageColour: '#87CEFA',"Status": 3,projectname:"Reva Group",projectcode:"R-025004",contractor:"ABC Contractors",contact:"Agro Engineers",projectmanager:"Andrew Jones",phone:"7760002206",address:"Bandra",setUpDueDate:"09-12-2020",activityDate:"09-12-2020",receivedDate:"02-09-2020",quotedDate:"02-09-2020",dueDate:"02-09-2020",quoted:"$7,000",awarded:"$2000",state:"Maharastra",contratcs:"12",date:"04-Nov-2019",status:"Completed"},
    {contracts:"3",projecttype:"Engineering", stageColour: '#FFA50069',"Status": 4,projectname:"Dr.Reddy's",projectcode:"R-025003",contractor:"HBVC Systems",contact:"VPG Buildwell Limited",projectmanager:"James Smith",phone:"9976829180",address:"Vijay Nagar",setUpDueDate:"09-12-2020",activityDate:"09-12-2020",receivedDate:"02-09-2020",quotedDate:"02-09-2020",dueDate:"02-09-2020",quoted:"$7,000",awarded:"$2000",state:"Karnataka",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {contracts:"6",projecttype:"Construction", stageColour: '#FFFF00',"Status": 5,projectname:"Reva Group",projectcode:"R-023005",contractor:"ABC Contractors",contact:"Volvo Constructions",projectmanager:"Kenneth McKee",phone:"7760002206",address:"Bandra",setUpDueDate:"09-12-2020",activityDate:"09-12-2020",receivedDate:"02-09-2020",quotedDate:"02-09-2020",dueDate:"02-09-2020",quoted:"$7,000",awarded:"$2000",state:"Maharastra",contratcs:"12",date:"04-Nov-2019",status:"Completed"}
  ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  public openGridColumnsDialog(){
    this.dialog.open(QuotesGridColDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }
  public openleadDialog() {
    let dialogRef = this.dialog.open(QuotesDialogComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });

    dialogRef.afterClosed().subscribe(lead => {
      
        if (lead=='yes') {
          this.gridCmp.getQuotes();
        }
    });
}
public openQuotes(stat) {
  let dialogRef = this.dialog.open(UpdateQuoteComponent, {
    data: stat,
    height: 'auto',
    width: '750px',
    autoFocus: false,
  });
}
}
