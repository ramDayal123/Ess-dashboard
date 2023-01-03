import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  FamilyDetails: any;
  Genderdata: any;
  MaritalStatusdata: any;
  FamilyRelationdata: any;
  SchemeTypedata: any;
  essEmpFamilyDetailsSavedata: any;
  getSchemeTypedata: any;
 

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
     this.FamilyDetails = this.formbuilder.group({
      name: ['', Validators.required],
      relationship : ['-1',Validators.required],
      Gender : ['-1',Validators.required],
      Maritalstatus : ['-1',Validators.required],
      dob : ['-1',Validators.required],
      PhysicallyDisability : ['-1',Validators.required],
      PercentageDisability : ['',Validators.required],
      Dependent : ['',Validators.required],
      Employed : ['',Validators.required],
      Schemes : ['',Validators.required],
      NameNominee : ['',Validators.required],
      Relation : ['',Validators.required],
      share : ['',Validators.required],

      
     })
     
    

     //////////// getGender
     


   this.apiService.getGender().subscribe(res => {
    if (res.data.status = 200) {
      this.Genderdata = res.data
    }
    console.log(this.Genderdata)
  })

     //////////// getMaritalStatus

     this.apiService.getMaritalStatus().subscribe(res => {
      if (res.data.status = 200) {
        this.MaritalStatusdata = res.data
      }
      console.log(this.MaritalStatusdata)
    })




     //////////// getFamilyRelation

     this.apiService.getFamilyRelation().subscribe(res => {
      if (res.data.status = 200) {
        this.FamilyRelationdata = res.data
      }
      console.log(this.FamilyRelationdata)
    })

      //////////// getFamilyRelation

      this.apiService.getSchemeType().subscribe(res => {
        if (res.data.status = 200) {
          this.getSchemeTypedata = res.data
        }
        console.log(this.SchemeTypedata)
      })

 


  }

  OnSubmit(){
    // alert(this.FamilyDetails.controls["name"].value,)
    let data ={
      "name": this.FamilyDetails.controls["name"].value,
      "relationship": this.FamilyDetails.controls["relationship"].value,
      "dob": this.FamilyDetails.controls["dob"].value,
      "gender": this.FamilyDetails.controls["Gender"].value,
      "maritalStatus": this.FamilyDetails.controls["Maritalstatus"].value,
      "physiccallyDisability": this.FamilyDetails.controls["PhysicallyDisability"].value,
      "percentageofDisability": this.FamilyDetails.controls["PercentageDisability"].value,
      "dependent": this.FamilyDetails.controls["Dependent"].value,
      "employed": this.FamilyDetails.controls["Employed"].value,
      "nominee": [
          {
            
              "schemes": this.FamilyDetails.controls["Schemes"].value,
              "nameofNominee": this.FamilyDetails.controls["NameNominee"].value,
              "relation": this.FamilyDetails.controls["Relation"].value,
              "share": this.FamilyDetails.controls["share"].value,
          }
      ]
  }
  
      this.apiService.essEmpFamilyDetailsSave(data).subscribe(res => {
        if (res.data.status = 200) {
          this.essEmpFamilyDetailsSavedata = res.data
        }
     
        console.log(this.essEmpFamilyDetailsSavedata)
      })
      
  }

  
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
