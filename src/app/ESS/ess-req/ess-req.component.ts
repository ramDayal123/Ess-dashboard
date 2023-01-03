import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-ess-req',
  templateUrl: './ess-req.component.html',
  styleUrls: ['./ess-req.component.css']
})
export class EssReqComponent implements OnInit {
  essreq !: FormGroup;
  ESSRequestData: any = [];
  SubReqdata:any=[];
  ESSurl:any=[];
  subreq:string = '';
  subreqID:any=[];


  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getESSRequestType();
    this.essreq = this.formbuilder.group({
      REQUEST_CAT_ID:['',Validators.required],
      subreqID:[''],
    });
  }
  //get Request Type
  getESSRequestType(): void {

    this.apiService.getESSRequestType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.ESSRequestData = res.data
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
  getESSSubRequestType(event:any){
    this.subreq = event.target.value;
   let requestedData = {
     "inEssRqstTypeId": this.subreq,
     }
     this.apiService.getESSSubRequestType(requestedData).subscribe({

       next: (res) => {
         // var MaritalStatusJson = JSON.parse(res.data);
         // var statusJson = JSON.parse(res.status);
         if (res.status = 200) {
           this.SubReqdata = res.data
         }
       },
       error: (err) => {
         let errorObj = {
           status:400,
           message: err.message,
           err: err,
           response: err
         }
         alert("Data Not Found");
         // console.log("error from get MaritalStatus api is ", errorObj);
         // console.log("error from get MaritalStatus api is ", err);
         // alert(err.error.message)
       }
     })

}

// Link the sub request item to related component 

loadComponent(): void {
//  let ESSurl = $('#subreqID').val();

 
}

submitted = false;
onSubmit() {
  this.submitted = true;
debugger
  if (this.essreq.invalid) {
  return;
  }
  else {
    var id =(<HTMLInputElement>document.getElementById("subreqID")).value
  this.router.navigateByUrl(id)
  }
}
}
