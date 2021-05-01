import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-review',
  templateUrl: './quotation-review.component.html',
  styleUrls: ['./quotation-review.component.scss']
})
export class QuotationReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
values=[
  {requisitionno:'HO/REQ-MAR-19-20/001',requisitionDate:'08-03-2021',requisitionTitle:'TEST',type:'Item',items:'1',approvals:'view',requiredBy:'27-02-2021',review:'1/1'}
]
}
