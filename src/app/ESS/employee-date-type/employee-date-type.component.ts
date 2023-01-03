import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-date-type',
  templateUrl: './employee-date-type.component.html',
  styleUrls: ['./employee-date-type.component.css']
})
export class EmployeeDateTypeComponent implements OnInit {
  selectedFiles: any;
  DateType: any = [];
  updatedate !: FormGroup;
  empselfData: any = [];
  updatedateList: any = [];
    rid: any;
    file!: File;
    Date:string=''
  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.updatedate = this.formbuilder.group({
      type:['-1',[Validators.required,Validators.pattern(/^\d+$/)]],
      date: ['',Validators.required],
      file: [''],
    });
    this.getempDataList();  
    this.getDateType();  
   
  }
  // For Choose File
  selectFile(files: any) {
    this.selectedFiles=files.target.files[0].name;
  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
   //get Date Type
   getDateType(): void {

    this.apiService.getDateType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DateType = res.data
          this.getupdatedate('');
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
  getupdatedate(event:any):void{
    debugger
    let updatedate = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.Date=updatedate; 
    alert(this.Date);
  }

  submitted = false;
  onSubmit() {
   this.submitted = true;  
   debugger 
   if (this.updatedate.invalid) {
    return;
    }
    else {
    let data ={      
      "type":this.updatedate.controls["type"].value,
      "datetype":this.Date,
       "date":this.updatedate.controls["date"].value,            
       //"date": this.datepipe.transform(this.updatedate.value.date, 'dd/MM/yyyy'),            
       "createdBy": 1,
       "officeId": 2,
       "employeeId": 3,
       "remarks": "try",
       "requestTypeId": 9,
       "approverId": 1,
       "reasonType":1,
       "ddoId":1,
       "roleId":1  
  }
debugger
    this.apiService.essUpdateEmployeeDate(data).subscribe({
      next: (res) => {
        if (res.status = 200) {

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          this.getempDataList();
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
  }
    getToday():string{
      return new Date().toISOString().split('T')[0]
        }

        getempDataList(): void {
          let Data = {       
            "employeeId":3,
            "requestTypeID":9
          }   
          this.apiService.getESSRequestLoad(Data).subscribe({
            next: (res) => {
              if (res.status = 200) {         
      
                this.updatedateList=res.data;
                
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
  }
