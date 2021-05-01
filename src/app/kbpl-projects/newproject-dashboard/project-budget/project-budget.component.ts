import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { TreeService } from 'src/app/mrc-projects/project-planning/tree.service';
import { ProjectAddSiteComponent } from './project-add-site/project-add-site.component';
import { ProjectAddSowComponent } from './project-add-sow/project-add-sow.component';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public treeService : TreeService,public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }
  public openSowDailog() {
    let dialogRef = this.dialog.open(ProjectAddSowComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }
  public openSiteDailog() {
    let dialogRef = this.dialog.open(ProjectAddSiteComponent, {
        data: false,
        height: 'auto',
        width: '1055px',
        disableClose: true
    });
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  }
