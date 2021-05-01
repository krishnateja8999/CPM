import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor() { }

  ngOnInit() {
  }
items=[
  {name:'Abhi Constructions(Ayyappa Society)',genType:'Auto',category:'-',conRef:'OM/CON/FEB-21/1020',type:'-',purpose:'-',direction:'In',gatPass:'OM/GP/FEB-21/10010',issueDate:'15-02-2021',closureDate:'17-04-2021',details:'view',activityLog:'view'},
  {name:'Dinesh Constructions(Ayyapa Society Branch)',genType:'Auto',category:'-',conRef:'OM/CON/APR-20/1016',type:'-',purpose:'-',direction:'In',gatPass:'OM/GP/APR-20/10009',issueDate:'15-04-2021',closureDate:'02-09-2021',details:'view',activityLog:'view'},
  {name:'Minda Industries Ltd(Branch - 1 - IGST)',genType:'Auto',category:'-',conRef:'OM/CON/OCT-19/1001',type:'-',purpose:'-',direction:'In',gatPass:'OM/GP/OCT-19/10001',issueDate:'16-10-2021',closureDate:'07-12-2021',details:'view',activityLog:'view'},
  {name:'Usha International Ltd(Hyderabad - Ayyapa Scty)',genType:'Auto',category:'-',conRef:'OM/CON/FEB-21/1023',type:'-',purpose:'-',direction:'In',gatPass:'OM/GP/FEB-21/10011',issueDate:'17-02-2021',closureDate:'11-05-2021',details:'view',activityLog:'view'}
]
filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}
}


