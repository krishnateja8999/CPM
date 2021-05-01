import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-archives',
  templateUrl: './material-archives.component.html',
  styleUrls: ['./material-archives.component.scss']
})
export class MaterialArchivesComponent implements OnInit {
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
