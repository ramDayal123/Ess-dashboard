import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

import { GlobalService } from 'src/app/Services/global.service';
import { Router } from '@angular/router';
// import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  EmpPersonalDetail: any;
  DisabilityTypeData: any;
  Districtdata: any;
  essEmployeePersonalDetailsSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router, public global:GlobalService) { }
 
//  validation
 
  ngOnInit(): void {
    this.EmpPersonalDetail = this.formbuilder.group({
      name: ['', Validators.required],
      height: ['',Validators.required],
      gender: ['-1', Validators.required],
      matrial:  new FormControl ('-1',Validators.required ),
      fname : ['',Validators.required],
      mname : ['',Validators.required],
      sname :['',Validators.required],
      mobileno : ['', Validators.required, Validators.pattern("[0-9 ]{12}"),
      Validators.maxLength(10)],
      emailid : ['', Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.email],
      CATEGORY_ID: ['-1' ,Validators.required],
      dob: ['', Validators.required],
      word: ['', Validators.required],
      Identification: ['', Validators.required],
      Blood_Group: ['-1', Validators.required],
      Disability: ['-1' , Validators.required],
      district_id: ['-1', Validators.required],
      Home_Town : ['',Validators.required],
      Belongs_Minority :['', Validators.required],
      Disability_Status : ['', Validators.required],
      nationalitys : ['',Validators.required],
      Percentage_Disability: ['',Validators.required]
    });





    
   //////////////////get Matrital Status
   

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
 
        if (res.status = 200) {
          this.MaritalStatusdata = res.data
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
  
    ///////////////////get Gender
 

      this.apiService.getGender().subscribe({
  
        next: (res) => {
          // var genderJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
           
            this.GenderData = res.data
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
    
    ////////////////get Gender

      this.apiService.getBloodGroup().subscribe({
        next: (res) => {
          // var genderJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
           
            this.BloodGroupdata = res.data
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
 
 //getCasteCategory

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

      this.apiService.getDistrict(1).subscribe({
    
        next: (res) => {
          // var DisabilityTypeJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.Districtdata = res.data
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
    
// ///getDisabilityType

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


   get mobileno() {
    return this.EmpPersonalDetail.get('mobileno')!;
  }

  // difine varible 
  MaritalStatusdata: any = [];
  GenderData: any = [];
  BloodGroupdata: any = [];
  getCasteCategoryData:any=[];
  getDisabilityData:any=[]
 

  
  submitted = false;
  onSubmit() {
    this.submitted = true;
// saveMstRequestDetail
// alert (this.EmpPersonalDetail.controls["Belongs_Minority"].value)
alert (this.EmpPersonalDetail.controls["Disability_Status"].value)

let data = {
  "firstName": this.EmpPersonalDetail.controls["name"].value,
  "gender": this.EmpPersonalDetail.controls["gender"].value,
  "height": this.EmpPersonalDetail.controls["height"].value,
  "dob": this.EmpPersonalDetail.controls["dob"].value,
  "identificationMark": this.EmpPersonalDetail.controls["Identification"].value,
  "maritalStatus": this.EmpPersonalDetail.controls["matrial"].value,
  "bloodGroup": this.EmpPersonalDetail.controls["Blood_Group"].value,
  "socialcategory": this.EmpPersonalDetail.controls["CATEGORY_ID"].value,
  "fatherName": this.EmpPersonalDetail.controls["fname"].value,
  "motherName": this.EmpPersonalDetail.controls["mname"].value,
  "spouseName": this.EmpPersonalDetail.controls["sname"].value,
  "mobileNumber": this.EmpPersonalDetail.controls["mobileno"].value,
   "emailID": this.EmpPersonalDetail.controls["emailid"].value,
  "homeDistrict": this.EmpPersonalDetail.controls["district_id"].value,
  "homeTown": this.EmpPersonalDetail.controls["Home_Town"].value,

  "nationality": this.EmpPersonalDetail.controls["nationalitys"].value,
  
  "belongsToMinority": this.EmpPersonalDetail.controls["Belongs_Minority"].value,
  // "disablilityStatus":"no",
  "disablilityStatus": this.EmpPersonalDetail.controls["Disability_Status"].value,

  
  "typeofDisability": this.EmpPersonalDetail.controls["Disability"].value,
  "percentageofDisability": this.EmpPersonalDetail.controls["Percentage_Disability"].value,

  }
  



  
  
    // getServiceCategoryg
    this.apiService.essEmployeePersonalDetailsSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmployeePersonalDetailsSavedata = res.data
      }
   
      console.log(this.essEmployeePersonalDetailsSavedata)
    })


  
  }



  
  addEmpDet() {
    // console.log(this.empPerDetForm.value);
  }

  // sweet alert massage
 
  
  // Only Integer Numbers
  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }



// Only AlphaNumeric
keyPressAlphaNumeric(event:any) {

  var inp = String.fromCharCode(event.keyCode);

  if (/[a-zA-Z0-9]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }


  
}


  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }

}


function f() {
  throw new Error('Function not implemented.');
}

