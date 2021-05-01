import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {AddProjectDialogComponent} from '../add-project-dialog/add-project-dialog.component';
import {GridColumnsProjectsDialogComponent} from '../grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import {ContractsDialogComponent} from '../contracts-dialog/contracts-dialog.component';
import { AddNotesContractorsComponent } from './add-notes-contractors/add-notes-contractors.component';
import { ShowIssueComponent } from './show-issue/show-issue.component';

@Component({
  selector: 'app-projects-gridview',
  templateUrl: './projects-gridview.component.html',
  styleUrls: ['./projects-gridview.component.scss']
})
export class ProjectsGridviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contracts:"5",projectmanager:"Raj", stageColour: '#00ff0040',"Status": 1,projectname:"Raheja",projectcode:"EAI",contractor:"GV Contracors",contact:"Anup",email:"anup@eai.com",phone:"9978515470",address:"Sector 42",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Haryana",contratcs:"8",date:"15-Dec-2019",status:"Initial"},
    {contracts:"5",projectmanager:"Teja", stageColour: '#C0C0C0',"Status": 2,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {contracts:"5",projectmanager:"Krishna", stageColour: '#87CEFA',"Status": 3,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",contratcs:"12",date:"04-Nov-2019",status:"Completed"},
    {contracts:"5",projectmanager:"Sai", stageColour: '#FFA50069',"Status": 4,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
    {contracts:"5",projectmanager:"Neeraja", stageColour: '#C0C0C0',"Status": 2,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",contratcs:"12",date:"04-Nov-2019",status:"Completed"}



  ]

  openGridColumnsDialog(){
    this.dialog.open(GridColumnsProjectsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openAddProjectDialog(){
    this.dialog.open(AddProjectDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  AddProjectNotes() {
    const dialogRef = this.dialog.open(AddNotesContractorsComponent, {
      
      autoFocus: false,
      height: 'auto',
      width: '600px',
      
    });
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }
  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
    {value:3, name: 'In Process', colorCode: '#87CEFA'},
    {value:4, name: 'On Hold', colorCode: '#FFA50069'},
  ]

   opendocs() {
    let dialogRef = this.dialog.open(ShowIssueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
