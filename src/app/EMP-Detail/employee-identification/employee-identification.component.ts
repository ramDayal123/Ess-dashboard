import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router' ;
import { GlobalService } from 'src/app/Services/global.service';
// import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-identification',
  templateUrl: './employee-identification.component.html',
  styleUrls: ['./employee-identification.component.css']
})
export class EmployeeIdentificationComponent implements OnInit {
  EmployeeIdentification!: FormGroup;
  essEmpIdentificationNumberSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router, public global: GlobalService) { }

  ngOnInit(): void {
    this.EmployeeIdentification = this.formbuilder.group({
      addharRef : ['', Validators.required],
      PassportNo : ['',  Validators.required],
      pancardNo : ['', Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]

    })

  }
  submitted = false;
  onSubmit() {
    this.submitted = true;

    let data = {
      "aadhaarRefNo": this.EmployeeIdentification.controls["addharRef"].value,
      "passportNo": this.EmployeeIdentification.controls["PassportNo"].value,
      "pan": this.EmployeeIdentification.controls["pancardNo"].value,
      // "aadhaarRefNo":"sdfste5367153",
      // "passportNo":"hih66dd8682",
      // "pan":"pdt1213g"
      }
      // getServiceCategoryg
      this.apiService.essEmpIdentificationNumberSave(data).subscribe(res => {
        if (res.data.status = 200) {
          this.essEmpIdentificationNumberSavedata = res.data
        }
     
        console.log(this.essEmpIdentificationNumberSavedata)
      })
      
    
  }



  


  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
