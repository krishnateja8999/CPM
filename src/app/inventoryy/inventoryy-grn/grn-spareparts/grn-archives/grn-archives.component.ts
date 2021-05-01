import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grn-archives',
  templateUrl: './grn-archives.component.html',
  styleUrls: ['./grn-archives.component.scss']
})
export class GrnArchivesComponent implements OnInit {
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
