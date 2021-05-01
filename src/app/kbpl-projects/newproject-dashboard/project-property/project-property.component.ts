import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-property',
  templateUrl: './project-property.component.html',
  styleUrls: ['./project-property.component.scss']
})
export class ProjectPropertyComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
