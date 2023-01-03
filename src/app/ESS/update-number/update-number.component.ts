import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-number',
  templateUrl: './update-number.component.html',
  styleUrls: ['./update-number.component.css']
})
export class UpdateNumberComponent implements OnInit {

  updateNumber !: FormGroup;
  empselfData: any = [];
  updateNumberList: any = [];
  rid: any;
  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.updateNumber = this.formbuilder.group({
      beltNo:['',[Validators.required]],
      siPolicyNo: ['',[Validators.required]],
      cpfNo: ['',[Validators.required]],
      cpenfNo: ['',[Validators.required]],
      mobileNo: ['',[Validators.required]],
      parnNo: ['',[Validators.required]],
      pilNo: ['',[Validators.required]],
      lascpenfNo: ['',[Validators.required]],
      gpfNo: ['',[Validators.required]],
      
    }); 
    
     this.getempDatalist();
     this.getempData();
    }

  
  getempData():void{            
    let Data = {       
        "employeeId":3    
    } 
    this.apiService.essUpdateOtherNumberSelect(Data).subscribe({  
      next: (res) => {          
        if (res.status = 200) {  
          this.updateNumber.patchValue(
            {
              beltNo: res.data.BELT_NO,
              cpenfNo: res.data.CPEN_NUMBER,
              cpfNo: res.data.CPF_NO,                
              lascpenfNo: res.data.LASCPNF_NO,
              mobileNo: res.data.MOB_NO,  
              pilNo: res.data.PLI_NO,  
              parnNo: res.data.PRAN_NUMBER,  
              siPolicyNo: res.data.SIPF_NO,  
              gpfNo: res.data.GPF_NO,  
            }); 
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

    submitted = false;
    onSubmit() {
     this.submitted = true;  
      
     if (this.updateNumber.invalid) {
      return;
      }
      else { 
      let data ={     
          "employeeName": "test",      
          "beltNo":this.updateNumber.controls["beltNo"].value,
           "cpfNo":this.updateNumber.controls["cpfNo"].value,
           "cpenfNo":this.updateNumber.controls["cpenfNo"].value,
           "mobileNo":this.updateNumber.controls["mobile_No"].value,
           "parnNo":this.updateNumber.controls["parnNo"].value,
           "pilNo":this.updateNumber.controls["pilNo"].value,
           "lascpenfNo":this.updateNumber.controls["lascpenfNo"].value,
          "siPolicyNo":this.updateNumber.controls["siPolicyNo"].value,
           "createdBy": 1,
           "officeId": 2,
           "employeeId": 3,
           "remarks": "try",
           "requestTypeId": 5,
           "approverId": 1,
           "reasonType":1,
           "ddoId":1,
           "roleId":1  
      }
    this.apiService.essUpdateOtherNumber(data).subscribe({
      next: (res) => {
        if (res.status = 200) {
          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)  
          this.getempDatalist();
          this.getempData();
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


   getempDatalist():void{            
    let Data = {       
      "employeeId":3,
      "requestTypeID":5
    }       
    this.apiService.getESSRequestLoad(Data).subscribe({  
      next: (res) => {          
        if (res.status = 200) {               
          this.updateNumberList = res.data         
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

    keypress(event: any) {
      var id = String.fromCharCode(event.keyCode);      
      if (/^\d+$/.test(id)) {
        return true;       
      }
      else {
        event.preventDefault();
        return false
      }
    }
}