import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-grn-storeincharge',
  templateUrl: './grn-storeincharge.component.html',
  styleUrls: ['./grn-storeincharge.component.scss']
})
export class GrnStoreinchargeComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

  ngOnInit() {
  }

  items=[
   {branchName:'Hyderabad - Ayyapa Scty',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1001',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1018/REV5',poDate:'05-Apr-2019',poValue:'37,845.30',poBalanceValue:'37,845.30',noofInv:'1'},
   {branchName:'Hyderabad - Ayyapa Scty',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1003',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1019/REV5',poDate:'19-Jan-2019',poValue:'-',poBalanceValue:'-',noofInv:'1'},
   {branchName:'Hyderabad - Ayyapa Scty',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1005',status:'GRN Pending',poRefNo:'BGR/OM/BHL/NOV/19-20/1082',poDate:'17-Feb-2021',poValue:'3,20,724.00',poBalanceValue:'3,20,724.00',noofInv:'1'},
  ]
  item=[
    {branchName:'Branch - OEM -CGST & SGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1004',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/DEC/18-19/1005/REV1',poDate:'28-Dec-2018',poValue:'-',poBalanceValue:'-',noofInv:'1'},
    {branchName:'Branch-Third-CGST & SGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1007',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1041',poDate:'12-Feb-2019',poValue:'-',poBalanceValue:'-',noofInv:'2'},
   ]
   itemm=[
    {branchName:'Branch - 1 - IGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/OCT-19/1002',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1018/REV5',poDate:'05-Apr-2019',poValue:'-',poBalanceValue:'-',noofInv:'1'},
    {branchName:'Branch - 1 - IGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1009',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1019/REV5',poDate:'19-Jan-2019',poValue:'-',poBalanceValue:'-',noofInv:'1'},
    {branchName:'Branch - 1 - IGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1010',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/NOV/19-20/1082',poDate:'17-Feb-2021',poValue:'-',poBalanceValue:'-',noofInv:'1'},
   ]
   itemms=[
    {branchName:'Branch 1 - CGST & SGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1011',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/JAN/18-19/1022',poDate:'22-Feb-2019',poValue:'-',poBalanceValue:'-',noofInv:'1'},
    {branchName:'Branch -1- IGST',storeName:'Dumpers & Machinery',conRefNo:'OM/CON/APR-20/1012',status:'Consignment In-Transit',poRefNo:'BGR/OM/BHL/APR/19-20/1004',poDate:'16-Apr-2019',poValue:'3,92,940.00',poBalanceValue:'3,92,940.00',noofInv:'1'},
   ]
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

}
