import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  token:any;
  TileData: any = [];
  is_showESS:boolean=true
  is_showMaster:boolean=false
  is_showBill:boolean=false
  is_showSanction:boolean=false
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute,private apiService: ServiceService,) { 

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token=params['token']
      this.token=this.token.replace(/ /g, "+");
      console.log(this.token);
      // this.token=this.token.trim();

      this.apiService.getLoadDashboard(this.token).subscribe({

        next: (res) => {;
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.TileData = res.data;
           // debugger
           this.is_showESS=false
              this.is_showMaster=false
              this.is_showBill=false
              this.is_showSanction=false
           for (let index = 0; index < res.data.length; index++) {
            var TILEID = res.data[index].TILEID;
            if (TILEID==1) {
              this.is_showESS=true
              // this.is_showMaster=false
              // this.is_showBill=false
              // this.is_showSanction=false

            }
            else if (TILEID==2) {
              // this.is_showESS=false
              this.is_showMaster=true
              // this.is_showBill=false
              // this.is_showSanction=false

            }
            else if (TILEID==3) {
              // this.is_showESS=false
              // this.is_showMaster=false
              this.is_showBill=true
              // this.is_showSanction=false

            }
            else if (TILEID==4) {
              // this.is_showESS=false
              // this.is_showMaster=false
              // this.is_showBill=false
              this.is_showSanction=true

            }
            else{
              this.is_showESS=false
              this.is_showMaster=false
              this.is_showBill=false
              this.is_showSanction=false
            }
          }
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
      localStorage.setItem('token', this.token);
})


  }
}
