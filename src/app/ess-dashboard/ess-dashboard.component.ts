import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from "src/app/service.service";
// import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ess-dashboard',
  templateUrl: './ess-dashboard.component.html',
  styleUrls: ['./ess-dashboard.component.css']
})
export class ESSDashboardComponent implements OnInit {
  ESSEmployeeDetail:any=[];
  employeeName:any;
  employeeID:any;
  empDOJ:any;
  empDesig:any;
  empDpt:any;
  empGPFNo:any;
  ESSnotification:any=[];
  ESSimpdata:any=[];
  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router,) { }

  ngOnInit(): void {
    this.getEssEmployeeDetails();
    this.getEssNotification();
    this.getEssImportantDocuments();
  }

  //get ESS Employee Detail
  getEssEmployeeDetails(): void {
    var empID = "1641366"; 

    this.apiService.getEssEmployeeDetails(empID).subscribe({

      next: (res) => {
        if (res.status = 200) {
          this.ESSEmployeeDetail = res.data[0]
          this.employeeName=res.data[0].EMPLOYEE_NAME
          this.employeeID=res.data[0].EMPLOYEE_CODE
          this.empDOJ=res.data[0].DOJ
          this.empDesig=res.data[0].DESG_DESC_EN
          this.empDpt=res.data[0].DEPT_NAME_EN
          this.empGPFNo=res.data[0].GPF_NO

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

//Get ESS DAshboard Notification
getEssNotification(): void {

    this.apiService.getEssNotification().subscribe({

      next: (res) => {
        if (res.status = 200) {
          this.ESSnotification = res.data
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

  //Get ESS Dashboard Important Document
  getEssImportantDocuments(): void {

  this.apiService.getEssImportantDocuments().subscribe({

    next: (res) => {
      if (res.status = 200) {
        this.ESSimpdata = res.data
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


}
