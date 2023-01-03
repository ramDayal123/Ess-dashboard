import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { data } from 'jquery';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  EmpDocument: any;
  DocumentTypedata: any;
  essEmpDocumentSavedata: any;
  submitted!: boolean;
  selectedFiles: any;

  constructor(private formbuilder: FormBuilder, private apiService: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.EmpDocument = this.formbuilder.group({
      Description: ['', Validators.required],
      documennt: ['-1',Validators.required],
      file : ['',Validators.required]

    })

    
  //////////// getDocumentType

   this.apiService.getDocumentType().subscribe(res => {
    if (res.data.status = 200) {
      this.DocumentTypedata = res.data
    }
    console.log(this.DocumentTypedata)
  })
   
  }

  selectFile(files:any)
  {
   this.selectedFiles=files.target.files[0].name;
  }

  OnSubmit (){
    this.submitted = true;
    let  data = {
      documentType : this.EmpDocument.controls ["documennt"].value,
      // "documentType":"gjhfd",
       
       "description": this.EmpDocument.controls["Description"].value,
        "chooseFile":this.EmpDocument.controls["file"].value,
  }
 
     // getServiceCategoryg
     this.apiService.essEmpDocumentSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmpDocumentSavedata = res.data
      }
   
      console.log(this.essEmpDocumentSavedata)
    })
     
  
  }
  

  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }

   
}
