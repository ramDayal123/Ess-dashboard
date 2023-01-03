import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-service',
  templateUrl: './employee-service.component.html',
  styleUrls: ['./employee-service.component.css']
})
export class EmployeeServiceComponent implements OnInit {
  EmpService: any;
  formGroup: any;
  Districtdata: any;
  submitted !: boolean;
  essEmpServiceDetailsSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.EmpService = this.formbuilder.group({

      Status: ['', Validators.required],
      date: ['', Validators.required],
      ServiceQuota: ['-1', Validators.required],
      service_Category:['-1', Validators.required],
      employeeType:['-1',Validators.required],
      serviceSub_Category: new FormControl ('-1',Validators.required) ,
      Gazetted : ['-1', Validators.required],
      ParentDepartment : ['-1', Validators.required],
      CurrentDepartment : ['-1', Validators.required],
      CurrentDesignation : ['-1', Validators.required],
      AppointedAs : ['-1',Validators.required],
      AppointmentOrder : ['',Validators.required],
      OrderIssuingAuthority : ['',Validators.required],
      GRPPran : ['',Validators.required],
      StateInsuranceNumber : ['',Validators.required],
      RGHSNo : ['',Validators.required],
      GPFNo : ['',Validators.required],
      PLINo : ['',Validators.required],
      BeltNo : ['',Validators.required],
      IAS_CPNF : ['',Validators.required]
    });
   
 
    this.getDisabilityType();
    this.getServiceCategory();
    // this.getPayeeType();
    this.getServiceSubCategory();
    this.getServiceQuota();
    this.getDesignation();
    this.getDepartment();
    this.getCasteCategory();
   
    this.apiService.getEmployeeType().subscribe(res => {
      if (res.data.status = 200) {
        this.EmployeeTypedata = res.data
      }
    })
  }

  EmployeeTypedata: any = [];
 
  DisabilityTypeData: any = [];
  getServiceCategoryeData:any=[];
  getPayeeTypeData:any=[];
  getServiceSubCategoryData:any=[];
  getServiceQuotaData:any=[];
  getDesignationData:any=[];
  getDepartmentData:any=[];
  getCasteCategoryData:any=[];
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

  
  //get DisabilityType
  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var DisabilityTypeJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DisabilityTypeData = res.data
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
  }

  
    //get getServiceSubCategory
    getServiceSubCategory(): void {

      this.apiService.getServiceSubCategory().subscribe({
  
        next: (res) => {
          // var getServiceSubCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceSubCategoryData = res.data
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

    
  
    //get Service Quota
    getServiceQuota():void{
      this.apiService.getServiceQuota().subscribe({
  
        next: (res) => {
      
          if (res.status = 200) {
            this.getServiceQuotaData = res.data
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




     //get Service Quota
     getDesignation():void{
      this.apiService.getDesignation().subscribe({
  
        next: (res) => {
          // var getDesignationJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDesignationData = res.data
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







     //getDepartment
     getDepartment():void{
      this.apiService.getDepartment().subscribe({
  
        next: (res) => {
  
          if (res.status = 200) {
            this.getDepartmentData = res.data
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
    //getCasteCategory
    getCasteCategory():void{
      this.apiService.getCasteCategory().subscribe({
  
        next: (res) => {

          if (res.status = 200) {
            this.getCasteCategoryData = res.data
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
    JanaadhaarData: any[] = [];

    GetJanaadhaarData(janaadhaar :any):void{
      let requestedData: any = { "janaadhaar": janaadhaar }
      this.apiService.GetJanaadhaarData(requestedData).subscribe({

        next: (res) => {
         
          let data = Object.values(res);
          for (let i = 0; i < data[1].length; i++) {
            this.JanaadhaarData.push(data);
          }
          console.log(this.JanaadhaarData[0][0].status);
      
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
      
          alert(err.error.message)
        }
      })
    }

    OnSubmit(){
      this.submitted = true;
      let data = {
        "entitlementStatus": this.EmpService.controls["Status"].value,
        "employeeType": this.EmpService.controls["employeeType"].value,
        "serviceCategory": this. EmpService.controls ["service_Category"].value,
         "serviceQuota":this.EmpService.controls["ServiceQuota"].value,
       "gazetted": this. EmpService.controls ["Gazetted"].value,
       "subServiceCategory": this.EmpService.controls["serviceSub_Category"].value,
       "parentDepartment":this.EmpService.controls["ParentDepartment"].value,
       "currentDepartment":this.EmpService.controls["CurrentDepartment"].value,
        "currentDesignation":this.EmpService.controls["CurrentDesignation"].value,
        "appointmentOrderNo":this.EmpService.controls["AppointmentOrder"].value,
        "appointedAs":this.EmpService.controls["AppointedAs"].value,
        "orderIssuingAuthoruity":this.EmpService.controls["OrderIssuingAuthority"].value,
        "pranType":this.EmpService.controls["GRPPran"].value,
        "stateInsuranceNumber":this.EmpService.controls["StateInsuranceNumber"].value,
        "rghsNO":this.EmpService.controls["RGHSNo"].value,
        "gpfNO":this.EmpService.controls["GPFNo"].value,
        "beltNo":this.EmpService.controls["BeltNo"].value,
        "pliNo":this.EmpService.controls["PLINo"].value,
        "iasCpneNo":this.EmpService.controls["IAS_CPNF"].value,
    }

      
    // getServiceCategoryg
    this.apiService.essEmpServiceDetailsSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmpServiceDetailsSavedata = res.data
      }
      console.log(this.essEmpServiceDetailsSavedata)
    })
    
    }

    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname])
     }
}
