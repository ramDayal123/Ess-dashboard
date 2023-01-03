import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from "src/app/service.service";
import { Router } from '@angular/router';
// import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare const $: any;
@Component({
  selector: 'app-emp-address',
  templateUrl: './emp-address.component.html',
  styleUrls: ['./emp-address.component.css']
})
export class EmpAddressComponent implements OnInit {
  EmpAddressForm!:FormGroup;
  Statedata:any=[];
  area:string = ''; 
  state:string='';
  district:string='';

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router,) { }


  ngOnInit(): void {
    this.EmpAddressForm = this.formbuilder.group({
      State: [''],      
      District: [''],      
      State1: [''],      
      District1: [''],      
    });
    this.getState();
    
  }
  onItemcheckChange():void{
    debugger
    this.EmpAddressForm.patchValue(
      {
        State1: 'raja',
        District1: this.EmpAddressForm.value.District,
      
      });      
  }
  getState(): void{
    this.apiService.getState().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Statedata = res.data
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
  }

  Districtdata:any=[];
  getDistrict(state:string){
    this.state=state;
    debugger
    this.apiService.getDistrict(state).subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
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
        // alert("error while fatching data from get MaritalStatus ");
        // console.log("error from get MaritalStatus api is ", errorObj);
        // console.log("error from get MaritalStatus api is ", err);
        // alert(err.error.message)
      }
    })
   }

   BlockCitydata:any=[];
   onItemChange(event:any){
    debugger
    //this.area = event.target.value;
    let requestedData = {
      "idistrictId":1,
      "istateId":  1
      }
      this.apiService.getBlockMunicipal(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.BlockCitydata = res.data
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
   }
   PanchayatWardata:any=[];
   getPanchayatWard(event:any){
    debugger
    let bmId = event.target.value;
    // let BlockCity = $('#BlockCitydata').val();
    let districtCd = $('#districtCd').val();

    let requestedData = {
      "imunPId":bmId,
      "istateId":this.state,
      "idistrictId":districtCd,
    }     
debugger
      this.apiService.getPanchayatWard(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.PanchayatWardata = res.data
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
   }

   Villagedata:any=[];
   getVillage(event:any){
    let gpId = event.target.value;
    // let BlockCity = $('#BlockCitydata').val();
    let requestedData = {
      "gpId":gpId,
      }
      this.apiService.getWard(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.Villagedata = res.data
            console.log(this.Villagedata)
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
   }
   Assemblydata:any=[];
   getAssembly(disId:string){
   
     this.apiService.getWard(disId).subscribe({

       next: (res) => {
         // var MaritalStatusJson = JSON.parse(res.data);
         // var statusJson = JSON.parse(res.status);
         if (res.status = 200) {
           this.Assemblydata = res.data
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
    }
}
