import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-drafting',
  templateUrl: './project-drafting.component.html',
  styleUrls: ['./project-drafting.component.scss']
})
export class ProjectDraftingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'A.Default',sow:'-',action:'-',remarks:'New Site Created',updatedBy:'Super Admin'}
  ]
}
