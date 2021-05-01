import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-research',
  templateUrl: './project-research.component.html',
  styleUrls: ['./project-research.component.scss']
})
export class ProjectResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'-',sow:'001 Default',action:'-',remarks:'New SOW Created',updatedBy:'Super Admin'}
  ]
}
