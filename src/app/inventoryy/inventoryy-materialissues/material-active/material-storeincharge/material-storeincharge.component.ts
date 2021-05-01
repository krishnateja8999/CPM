import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddJobCardComponent } from './add-job-card/add-job-card.component';

@Component({
  selector: 'app-material-storeincharge',
  templateUrl: './material-storeincharge.component.html',
  styleUrls: ['./material-storeincharge.component.scss']
})
export class MaterialStoreinchargeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
item=[
  {sino:'1',jobCard:'1111',maintenanceType:'Overhauling',equipmentType:'Backhoe Loader',equipmentMake:'	Caterpillar',equipmentModal:'D85ESS 17',doorNo:'3',hmr:'N/A',kmr:'N/A',materialIssue:'1',status:'Delayed',jobCardDate:'15-Oct-2019'},
  {sino:'2',jobCard:'2222',maintenanceType:'Miscellaneous',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'1',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'3',jobCard:'3333',maintenanceType:'Running',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'2',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'4',jobCard:'4444',maintenanceType:'Scheduled',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'3',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'5',jobCard:'5555',maintenanceType:'Miscellaneous',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'5',hmr:'N/A',kmr:'N/A',materialIssue:'1',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'6',jobCard:'6666',maintenanceType:'Preventative',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'3',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'7',jobCard:'7777',maintenanceType:'Preventative',equipmentType:'Car',equipmentMake:'Volvo',equipmentModal:'XC60 D4',doorNo:'9',hmr:'N/A',kmr:'N/A',materialIssue:'1',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'8',jobCard:'8888',maintenanceType:'Miscellaneous',equipmentType:'Dump Truck',equipmentMake:'Scania',equipmentModal:'P410',doorNo:'6',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'},
  {sino:'9',jobCard:'9999',maintenanceType:'Miscellaneous',equipmentType:'Dump Truck',equipmentMake:'Mercedes Benz',equipmentModal:'ACTROS 4841K',doorNo:'1',hmr:'N/A',kmr:'N/A',materialIssue:'0',status:'Pending',jobCardDate:'15-Oct-2019'}
]
openjobcard(){
  this.dialog.open(AddJobCardComponent,{
    width:"600px",
    height:"auto"
  })
}
}
