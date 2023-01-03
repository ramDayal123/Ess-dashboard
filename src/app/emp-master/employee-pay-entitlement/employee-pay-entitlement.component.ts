import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-pay-entitlement',
  templateUrl: './employee-pay-entitlement.component.html',
  styleUrls: ['./employee-pay-entitlement.component.css']
})
export class EmployeePayEntitlementComponent implements OnInit {
  EmpService:any;
  EmpSelfDetailForm!:FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.EmpSelfDetailForm = this.formbuilder.group({
      Name: ['',Validators.required],      
     
    });
  }
  submitted = false;
  onSubmit() {
    debugger
    this.submitted = true;
    // alert(this.EmpSelfDetailForm.valid)
    if (this.EmpSelfDetailForm.invalid) {
      debugger
  
 
    }
  }
  
}
