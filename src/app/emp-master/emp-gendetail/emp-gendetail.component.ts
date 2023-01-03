import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';

  @Component({
    selector: 'app-emp-gendetail',
    templateUrl: './emp-gendetail.component.html',
    styleUrls: ['./emp-gendetail.component.css']
  })
  export class EmpGendetailComponent implements OnInit {   
    EmpSelfDetailForm!:FormGroup;
    EmployeeIDForm!:FormGroup;
  
    constructor(private formbuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.EmployeeIDForm = this.formbuilder.group({
        Employee_ID: ['',Validators.required],      
       
      });
      this.EmpSelfDetailForm = this.formbuilder.group({
        Name: ['',Validators.required],      
       
      });
    }



    
    submittedd = false;
    onSubmitSearch() {
      debugger
      this.submittedd = true;
      // alert(this.EmpSelfDetailForm.valid)
      if (this.EmployeeIDForm.invalid) {
        debugger
    
   
      }
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
  