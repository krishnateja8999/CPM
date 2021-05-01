import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-activity-log',
  templateUrl: './project-activity-log.component.html',
  styleUrls: ['./project-activity-log.component.scss']
})
export class ProjectActivityLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items=[
  {referenceNumber:'A-025011-Inv001',dateTime:'2021-02-25, 04:15 AM',status:'New',option:'-',remarks:'-',activityDate:'09-02-2021',updatedBy:'Super Admin'}
]
}
