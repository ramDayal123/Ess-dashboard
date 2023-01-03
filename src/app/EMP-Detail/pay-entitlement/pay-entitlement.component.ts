import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay-entitlement',
  templateUrl: './pay-entitlement.component.html',
  styleUrls: ['./pay-entitlement.component.css']
})
export class PayEntitlementComponent implements OnInit {
  PayEntitlement!: FormGroup;
  HRAData: any;
  DAdata: any;
  PayCommisiondata: any;
  Designationdata: any;
  essEmpPayEntitlementSavedata: any;
 
 

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.PayEntitlement = this.formbuilder.group({
      service_Category: ['-1',Validators.required],
      serviceSub_Category: ['-1',Validators.required],
      Designation: ['-1',Validators.required],
      Commission: ['-1',Validators.required],
      Darate: ['-1',Validators.required],
      HRAData: ['1',Validators.required],
      PayOptedDate : ['',Validators.required],
      PayBandScale : ['',Validators.required],
      gradedatePay : ['',Validators.required],
      BasicPay : ['',Validators.required],
      GovtQuarter : ['',Validators.required],
      gradePay : ['',Validators.required],
      HoA : ['',Validators.required]
    })
  
    this.getServiceCategory();
   
  }
  OnSubmit(){
    let data ={
      "serviceCategory":this.PayEntitlement.controls["service_Category"].value,
      "subServiceCategory":this.PayEntitlement.controls["serviceSub_Category"].value,
      "designation":this.PayEntitlement.controls["Designation"].value,
      "payCommission":this.PayEntitlement.controls["Commission"].value,
      "payOptedDate":this.PayEntitlement.controls["PayOptedDate"].value,
      "entryInExistingPayBand":this.PayEntitlement.controls["gradedatePay"].value,
      "payBandScale":this.PayEntitlement.controls["PayBandScale"].value,
      "gradePay":this.PayEntitlement.controls["gradePay"].value,
      "basicPay":this.PayEntitlement.controls["BasicPay"].value,
      "hoa":this.PayEntitlement.controls["HoA"].value,
      "daRate":this.PayEntitlement.controls["Darate"].value,
      "govtQuarter":this.PayEntitlement.controls["GovtQuarter"].value,
      "hraRate":this.PayEntitlement.controls["HRAData"].value,
      }

        // getServiceCategoryg
    this.apiService.essEmpPayEntitlementSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmpPayEntitlementSavedata = res.data
      }
      console.log(this.essEmpPayEntitlementSavedata)
    })
      
  }

  getServiceCategoryeData:any=[];
  SubServiceCategorydata:any=[];

  getSubServiceCategory(event: any) {
    // alert(event.target.value)
    let requestedData = {
      serviceCategoryId: event.target.value
    }

    
    this.apiService.getSubServiceCategory(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.SubServiceCategorydata = res.data
      }
      console.log(this.SubServiceCategorydata)
    })

  }


   //get getServiceCategorye
   getServiceCategory(): void {

    this.apiService.getServiceCategoryg().subscribe({

      next: (res) => {
        // var getServiceCategoryJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getServiceCategoryeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
   
      }
    })


        
   // getDesignation
   this.apiService.getDesignation().subscribe(res => {
    if (res.data.status = 200) {
      this.Designationdata = res.data
    }
    console.log(this.Designationdata)
  })

  // getPayCommision

  this.apiService.getPayCommision().subscribe(res => {
    if (res.data.status = 200) {
      this.PayCommisiondata = res.data
    }
    console.log(this.PayCommisiondata)
  })
  

    // getDaRate
    this.apiService.getDaRate().subscribe({

      next: (res) => {
        // var DcocumentJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DAdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    })
  

// ///// getHra
    this.apiService.getHra().subscribe({

      next: (res) => {
        // var DcocumentJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.HRAData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    })
  
    

   
  

    }
    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname])
     }
  }
 
