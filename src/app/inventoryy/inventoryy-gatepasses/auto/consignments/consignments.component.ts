import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss']
})
export class ConsignmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[
    {vendor:'Menon Bearings Ltd (Branch -1- IGST)', gatePass: 'OM/GP/APR-20/10008', conRef:'OM/CON/APR-20/1012',invNo:'1',transporterDetails:"TS09EA213123",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},
    {vendor:'Menon Bearings Ltd (Branch 1 - CGST & SGST)', gatePass: 'OM/GP/APR-20/10007', conRef:'OM/CON/APR-20/1011',invNo:'1',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},
    {vendor:'Minda Industries Ltd (Branch - 1 - IGST)', gatePass: 'OM/GP/APR-20/10006', conRef:'OM/CON/APR-20/1010',invNo:'1',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},                                                           
    {vendor:'Minda Industries Ltd (Branch - 1 - IGST)', gatePass: 'OM/GP/APR-20/10005', conRef:'OM/CON/APR-20/1009',invNo:'2',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},                                                           
    {vendor:'Rane Holdings Ltd (Branch-Third-CGST & SGST)', gatePass: 'OM/GP/APR-20/10004', conRef:'OM/CON/APR-20/1007',invNo:'2',transporterDetails:"TS05EA21312",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},                                                         
    {vendor:'Rane Holdings Ltd (Branch - OEM -CGST & SGST)', gatePass: 'OM/GP/APR-20/10003', conRef:'OM/CON/APR-20/1004',invNo:'2',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},
    {vendor:'Minda Industries Ltd (Branch - 1 - IGST)', gatePass: 'OM/GP/NOV-19/10002', conRef:'OM/CON/OCT-19/1002',invNo:'1',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},
    {vendor:'Usha International Ltd (Hyderabad - Ayyapa Scty)', gatePass: 'OM/GP/APR-20/10002', conRef:'OM/CON/APR-20/1002',invNo:'1',transporterDetails:"TS09EA1233",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},                                                           
    {vendor:'Usha International Ltd (Hyderabad - Ayyapa Scty)', gatePass: 'OM/GP/APR-20/10001', conRef:'OM/CON/APR-20/1001',invNo:'1',transporterDetails:"Update",issueDate:"-",closeGP:"Update",activity:"	View",logStatus:"Pending"},
  ]
}
