import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-quote',
  templateUrl: './project-quote.component.html',
  styleUrls: ['./project-quote.component.scss']
})
export class ProjectQuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'A.Default',sow:'-',action:'-',remarks:'New Site Created',updatedBy:'Super Admin'}
  ]
}
