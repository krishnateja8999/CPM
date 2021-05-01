import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives-stock',
  templateUrl: './archives-stock.component.html',
  styleUrls: ['./archives-stock.component.scss']
})
export class ArchivesStockComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
items=[
  {slNo:'1',project:'Legacy Project',stoNo:'STO/OM-LGP/FEB-21/10009',date:'19-Feb-2021',stocktr:'Outgoing',invoiceNo:'BGR/OM-LGP/1001',invoiceDate:'19-Feb-2021',srnNo:'BGR/LGP/SRN/FEB-21/1001',deliveryDate:'19-Feb-2021',discrepancy:'view',present:'No Discrepancy',status:'Completed',activityLog:'view'}
]
filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}
}
