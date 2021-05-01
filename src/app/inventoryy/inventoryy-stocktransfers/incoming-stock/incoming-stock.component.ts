import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-stock',
  templateUrl: './incoming-stock.component.html',
  styleUrls: ['./incoming-stock.component.scss']
})
export class IncomingStockComponent implements OnInit {
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
