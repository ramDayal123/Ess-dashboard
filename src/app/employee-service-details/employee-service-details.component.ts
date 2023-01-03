import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-service-details',
  templateUrl:'./employee-service-details.component.html',
  styleUrls: ['./employee-service-details.component.css']
})
export class EmployeeServiceDetailsComponent implements OnInit {
  EmpService:any;
  formGroup!:FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.EmpService = this.formbuilder.group({
      Status: ['', Validators.required],      
      GEN_ID: ['-1', [Validators.required]],
      height: ['', [Validators.required]],
      date: ['', Validators.required],
      ServiceQuota: ['-1', Validators.required],
      M_STATUS_ID: ['-1', Validators.required],
      Identification: ['', Validators.required],
      service_Category:['-1', Validators.required],
      employeeType:['-1',Validators.required],
      serviceSub_Category: new FormControl ('-1',Validators.required) 
    });
  }

}
