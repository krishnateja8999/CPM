import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-calculation',
  templateUrl: './project-calculation.component.html',
  styleUrls: ['./project-calculation.component.scss']
})
export class ProjectCalculationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {date:'29-03-2021, 8:05 PM',operation:'Created',site:'A.Default',sow:'-',action:'-',remarks:'New Site Created',updatedBy:'Super Admin'}
  ]
}
