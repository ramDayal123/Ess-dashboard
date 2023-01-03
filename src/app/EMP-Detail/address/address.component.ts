import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { GlobalService } from 'src/app/Services/global.service';
import { Router } from '@angular/router';
// import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  essEmployeeAddressSavedata: any;
  saveAddress! : FormGroup;
  selectedRecord: any;
  State: any;
  district: any;
  blockId:any;
  getBlockdata: any;
  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router, public global: GlobalService) { }

  ngOnInit(): void {
    this.getState();
    this.saveAddress = this.formbuilder.group({
      State : ['-1',Validators.required],
      District : ['-1',Validators.required],
      Rural : ['',Validators.required],
      Urban : ['-1',Validators.required],
      BlockMuncipal : ['-1',Validators.required],
      PanchayatWard : ['-1',Validators.required],
      Assembly : ['',Validators.required],
      pincode : ['',Validators.required],
      HouseNo : ['',Validators.required],
      area : ['', Validators.required]
   })

  }
  Statedata:any=[];
   StatedataP:any=[];
  area:string = ''; 
  state:string='';
  getState(): void{
    this.apiService.getState().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Statedata = res.data
          this.StatedataP = res.data
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
  DistrictdataP:any=[];
  getDistrict(state:string){
    this.state=state;
    this.apiService.getDistrict(state).subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Districtdata = res.data
         this.DistrictdataP = res.data

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
  //  onItemChange2(event:any){
    
  //   alert('dfjghfkdjk')

    
  //  }
   
   BlockCitydata:any=[];
   onItemChange(event:any){
    this.area = event.value;
    this.district = (<HTMLInputElement>document.getElementById("districtCd")).value;

     alert(this.area)
     this.district = (<HTMLInputElement>document.getElementById("districtCd")).value;
    let requestedData = {
      "idistrictId":this.district,
      "istateId":  this.state
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
    this.blockId = event.target.value;
    // let BlockCity = $('#BlockCitydata').val();
    // let districtCd = $('#districtCd').val();
    var districtCd = (<HTMLInputElement>document.getElementById("districtCd'")).value;

    let requestedData = {
      "istateId": this.state,
      "idistrictId":this.state,
      "iblockId":this.blockId,
    }
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

    OnSubmit(){
     
      let data ={
        "pstate":this.saveAddress.controls["State"].value,
        "pdistrict":this.saveAddress.controls["District"].value,
        "parea": this.saveAddress.controls["area"].value,
        "pblock": 4,
        "pvillage": "drd",
        "phouseNo": this.saveAddress.controls["HouseNo"].value,
        "ppincode": this.saveAddress.controls["pincode"].value,
        "passembly": this.saveAddress.controls["Assembly"].value,
        "cstate": "raj",
        "cdistrict": "tyu",
        "carea": 6,
        "cblock": 7,
        "cvillage": "ghj",
        "chouseNo": "rgf",
        "cpincode": "567",
        "cassembly": "654",
        "requestId": 4,
        "officeId": 6,
        "createdBy": 1
        }

            
     // getServiceCategoryg
     this.apiService.essEmployeeAddressSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmployeeAddressSavedata = res.data
      }
   
      console.log(this.essEmployeeAddressSavedata)
    })
      
     }
       // autolode data selecter
  setFormValue(formname: FormGroup, fields: []): any {

  }

     clickautodata(){
 
    
    this.saveAddress.patchValue({
      
      State: this.saveAddress.controls["State"].value, 
      area: this.saveAddress.controls["area"].value, 
      pincode: this.saveAddress.controls["pincode"].value, 
      HouseNo:this.saveAddress.controls["HouseNo"].value,
      Assembly:this.saveAddress.controls["Assembly"].value
    });
       
     }


    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname]);
    }
}
