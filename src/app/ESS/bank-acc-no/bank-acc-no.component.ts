import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-acc-no',
  templateUrl: './bank-acc-no.component.html',
  styleUrls: ['./bank-acc-no.component.css']
})
export class BankAccNoComponent implements OnInit {
  Statedata: any = [];
  BankData: any = [];
  BankBranchData: any = [];
  updateBank !: FormGroup;
  empselfData: any = [];
  updateBankList: any = [];
  rid: any;
  ID: string = '';

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.updateBank = this.formbuilder.group({
      ACCOUNT_NO: [''],
      PAYEE_BANK_ID: [''],
      BANK_BRANCH_ID: [''],
      Enter_IFSC: [''],
      new_Account_No: [''],
    });

    this.apiService.getBank().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.BankData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get MaritalStatus ");
        // console.log("error from get MaritalStatus api is ", errorObj);
        // console.log("error from get MaritalStatus api is ", err);
        // alert(err.error.message)
      }
    })

    this.getempData();
    this.getempDataList();
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    
    if (this.updateBank.invalid) {
      return;
    }
    else {
      let rdata = {
        "accountNumber": this.updateBank.controls["new_Account_No"].value,
        "ifsc": this.updateBank.controls["Enter_IFSC"].value,
        "bank":1,
        "branch": 1,
        "createdBy": 1,
        "officeId": 2,
        "employeeId": 3,
        "remarks": "try",
        "requestTypeId": 4,
        "approverId": 1,
        "reasonType": 1,
        "ddoId": 1,
        "roleId": 1
      }
      // console.log(data);
      this.apiService.essBankAccountChangeRequest(rdata).subscribe({
        next: (res) => {
          if (res.status = 200) {
            // alert("Save As Draft Successfully");

            this.empselfData = res.data
            this.rid = res.data.requestId
            alert(res.data.message + ' for Request Id ' + this.rid)
            this.updateBank.reset();
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

  getempData(): void {
    this.updateBank.controls['ACCOUNT_NO'].disable();
    this.updateBank.controls['PAYEE_BANK_ID'].disable();
    this.updateBank.controls['BANK_BRANCH_ID'].disable();
    let Data = {
      "employeeId": 3
    }

    this.apiService.getESSDataLoadBankDetails(Data).subscribe({
      next: (res) => {
        if (res.status = 200) {
          

          //this.updateBank.setValue(res.data);
          this.updateBank.patchValue(
            {
              ACCOUNT_NO: res.data.ACCOUNT_NO,
              BANK_BRANCH_ID: res.data.BANK_BRANCH_ID,
              PAYEE_BANK_ID: res.data.PAYEE_BANK_ID,               
            
            })

          this.ID = res.data.PAYEE_BANK_ID
          this.getBankBranch();
                 

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
  getempDataList(): void {
    let Data = {       
      "employeeId":3,
      "requestTypeID":4
    }   
    this.apiService.getESSRequestLoad(Data).subscribe({
      next: (res) => {
        if (res.status = 200) {         

          this.updateBankList=res.data;
          
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

  getBankBranch() {
    let requestedData = {
      iBankId: this.ID
    }
    
    this.apiService.getBankBranch(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.BankBranchData = res.data
      }
    })
  }


}
