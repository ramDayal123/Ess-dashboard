import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-self-service',
  templateUrl: './employee-self-service.component.html',
  styleUrls: ['./employee-self-service.component.css']
})
export class EmployeeSelfServiceComponent implements OnInit {
  EmpSelfDetailForm !: FormGroup;
  show_is_remark: boolean=false ;
  BloodGroupdata: any = [];
  Genderdata: any = [];
  CasteCategoryData: any = [];
  DisabilityTypeData: any = [];
  MaritalStatusData: any = [];
  empdataAPI:any=[];
  empdata: any = {};
  Employeeselfservice: any = {};
  empselfData: any = [];
  isReadOnly: boolean = true;
    rid: any;
    is_show:boolean=false;
    GenderName:string=''
    SocialCategory:string=''
    MaritalStatusname:string=''
    percentageDisability:string=''
    Disability_Type:string=''

    CharhacterRegex=/^[a-zA-Z_ ]*$/i
    intergerRegex=/^\d+$/
    dobRegex=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
    emailRegex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    panregex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

    constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.EmpSelfDetailForm = this.formbuilder.group({
      Name:['',[Validators.required,Validators.pattern(this.CharhacterRegex)]],
      fatherName:['',[Validators.required,Validators.pattern(this.CharhacterRegex)]],
      motherName:['',[Validators.required,Validators.pattern(this.CharhacterRegex)]],
      dob:['',Validators.required],
      mobileNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]],
      spouseName:['',[Validators.required,Validators.pattern(this.CharhacterRegex)]],
      percentageDisability:[''],
      height:['',Validators.required],
      identificationMark:['',Validators.required],
      Gender_Data:['-1',[Validators.required,Validators.pattern(this.intergerRegex)]],
      Blood_Group:['-1',[Validators.required,Validators.pattern(this.intergerRegex)]],
      Social_Category:['-1',[Validators.required,Validators.pattern(this.intergerRegex)]],
      Marital_Status:['-1',[Validators.required,Validators.pattern(this.intergerRegex)]],
      Disability_Type:['-1'],
      panNo:['',Validators.required],
      emailID:['',[Validators.required,Validators.pattern(this.emailRegex)]],
      disable:['',Validators.required],
      genderName:[''],
socialCategoryName:[''],
maritalStatusName:['']

      
    });
    this.getBloodGroup();
    this.getGender();
    this.getCasteCategory();
    this.getDisabilityType();
    this.getMaritalStatus();
    this.getempData();
    this.getempDataList();
  }
  
  keypress(event: any) {
    var id = String.fromCharCode(event.keyCode);
    
    if (/^[a-zA-Z_ ]/.test(id)) {
      return true;
     
    }
    else {
      event.preventDefault();
      return false
    }
  }
  //get Blood Group
  getBloodGroup(): void {

    this.apiService.getBloodGroup().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
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
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }
  getGender(): void {
    this.apiService.getGender().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Genderdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  getCasteCategory(): void {

    this.apiService.getCasteCategory().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.CasteCategoryData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
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
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  getMaritalStatus(): void {

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.MaritalStatusData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  onreset():void{     
      this.EmpSelfDetailForm.reset();
  }
  // getControl(name:any):AbstractControl | null{   
  //   return this.EmpSelfDetailForm.get(name)     
  //   }

  getGenderName(event:any){
    let getGenderName = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.GenderName=getGenderName; 
    // this.EmpSelfDetailForm.patchValue(
    //   {
    //     genderName: this.GenderName,
    //   })
   
  }
  getSocialCategory(event:any){
    let getSocialCategory = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.SocialCategory=getSocialCategory;     
  }
  getMaritalStatusname(event:any){
    let getMaritalStatusname = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.MaritalStatusname=getMaritalStatusname;     
  }

  submitted = false;
  onSubmit() {
   this.submitted = true;  
      debugger
   if (this.EmpSelfDetailForm.invalid) {    
    return;
    }
    else {
      let rdata=  {
        "name": this.EmpSelfDetailForm.controls["Name"].value,
        "fatherName": this.EmpSelfDetailForm.controls["fatherName"].value,
        "motherName": this.EmpSelfDetailForm.controls["motherName"].value,
        "gender": this.EmpSelfDetailForm.controls["Gender_Data"].value,
        "genderName":this.GenderName,
        "dob": this.EmpSelfDetailForm.controls["dob"].value,
        //"dob": this.datepipe.transform(this.EmpSelfDetailForm.value.dob, 'dd/MM/yyyy'),
        "socialCategory": this.EmpSelfDetailForm.controls["Social_Category"].value,
        "socialCategoryName": this.SocialCategory,
        "mobileNumber": this.EmpSelfDetailForm.controls["mobileNumber"].value,
        "maritalStatus": this.EmpSelfDetailForm.controls["Marital_Status"].value,
        "maritalStatusName": this.MaritalStatusname,
        "spouseName": this.EmpSelfDetailForm.controls["spouseName"].value,
        "disable": this.EmpSelfDetailForm.controls["disable"].value,
        "disabilityType":this.EmpSelfDetailForm.controls["Disability_Type"].value,
        "percentageDisability": this.EmpSelfDetailForm.controls["percentageDisability"].value,
        "height": this.EmpSelfDetailForm.controls["height"].value,
        "bloodGroup": this.EmpSelfDetailForm.controls["Blood_Group"].value,
        "identificationMark": this.EmpSelfDetailForm.controls["identificationMark"].value,
        "panNo": this.EmpSelfDetailForm.controls["panNo"].value,
        "emailId": this.EmpSelfDetailForm.controls["emailID"].value,
        "createdBy": 1,
        "officeId": 2,
        "employeeId": 3,
        "remarks": "try",
        "requestTypeId": 1,
        "approverId": 1,
        "reasonType":1,
        "ddoId":1,
        "roleId":1
    }
      // console.log(data);    
      this.apiService.SubmitEntitySave(rdata).subscribe({
        next: (res) => {
          if (res.status = 200) {
            // alert("Save As Draft Successfully");  
            this.empselfData = res.data
            this.rid=res.data.requestId
            alert( res.data.message+' for Request Id '+this.rid)
            this.getempDataList();
            //this.onreset();
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert(errorObj.message)
        }
  
      })
      
    }
  }
  getToday():string{
return new Date().toISOString().split('T')[0]
  }
  onItemChange(event:string){
 
      if (event == '2') {
        this.EmpSelfDetailForm.patchValue({
          percentageDisability: '',
          Disability_Type: '-1',
        })
        this.EmpSelfDetailForm.controls['percentageDisability'].disable();
        this.EmpSelfDetailForm.controls['Disability_Type'].disable();
      }
      else {
        this.EmpSelfDetailForm.controls['percentageDisability'].enable();
        this.EmpSelfDetailForm.controls['Disability_Type'].enable();
        this.EmpSelfDetailForm.patchValue({
          percentageDisability: this.percentageDisability,
          Disability_Type:this.Disability_Type,
        })
    
      }
    }
    getempData():void{            
      let Data = {       
          "employeeId":3   
      }   
     
      this.empdata=Data;     
      this.apiService.getESSDataLoadPersonal(Data).subscribe({  
        next: (res) => {          
          if (res.status = 200) {              
            this.empdata = res.data          
            //alert(res.data.fatherName)
           // this.EmpSelfDetailForm.setValue(res.data);          
            this.EmpSelfDetailForm.patchValue(
              {
                Name: res.data.NAME_EN,
                fatherName: res.data.FATHER_NAME,
                motherName: res.data.MOTHER_NAME,                
                spouseName: res.data.SPOUSENAME,
                Disability_Type: res.data.DISABILITY_ID,
                Gender_Data: res.data.GEN_ID,
                mobileNumber: res.data.MOB_NO,
                Social_Category: res.data.CATEGORY_ID,
                emailID: res.data.EMAIL,
                percentageDisability: res.data.DISABILITY_PERCENT,
                Blood_Group: res.data.B_GROUP_ID,
                height: res.data.HEIGHT,
                identificationMark: res.data.IDENTIFICATION_MARKS,
                panNo: res.data.PAN,                
                dob:res.data.IDENTIFICATION_MARKS, 
                disable: res.data.DISABLE,              
                Marital_Status: res.data.M_STATUS_ID,
              }); 
          this.percentageDisability=res.data.DISABILITY_PERCENT
          this.Disability_Type=res.data.DISABILITY_ID
           
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
      getempDataList():void{ 
        this.Employeeselfservice=[]
        let Dataload = { 
            "employeeId":3,
            "requestTypeID":1
      }      
        this.apiService.getESSRequestLoad(Dataload).subscribe({  
          next: (res) => {          
            if (res.status = 200) {  
             
              if (res.data == '') {  
             
              }
              else{
                
                 this.Employeeselfservice = res.data;   
                  
              //alert(res.data.fatherName)
              }
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
      onKeydown(event:any) {
        event.target.value = ""
          return event.target.value;
        
      }
}
