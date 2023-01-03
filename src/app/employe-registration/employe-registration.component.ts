import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-employe-registration',
  templateUrl: './employe-registration.component.html',
  styleUrls: ['./employe-registration.component.css']
})
export class EmployeRegistrationComponent implements OnInit {
  isEditable = false;
  showEdit:boolean=false;
  EmpRegistration!: FormGroup;
  SaveDocument!: FormGroup
  ServiceCategorygdata: any;
  SubServiceCategorydata: any;
  selectedRecord: any = {};
  JanadharInfodata: any;
  formBuilder: any;
  httpClient: any;
  assignedto: any;
  des: any;
  rem: any;
rid:any;
  private readonly newProperty = this;
  empSavedata: any;
  DocumentTypedata: any;
  img: any;
  employeeRegistrationDocumentSavedata: any;
  file!: File;
  assigened!: string;
  remark!: string;
  document!: string
  Description!: string
  isNextDisabled!: boolean;
  checked: any;

  disableSearch!: boolean;
  selectedFiles: any;
  

  constructor(
    private _formBuilder: FormBuilder,
    private apiService: ServiceService,
    private http: HttpClient,
  ) {


  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];


    }
  }
 
  ngOnInit(): void {
  
    this.EmpRegistration = this._formBuilder.group({
      JanAadharId: new FormControl("", Validators.required ),
      employeeType: new FormControl("-1", Validators.required),
      MemberID: new FormControl("", Validators.required),
      JanadharInfodata: new FormControl('', [Validators.required, Validators.minLength(10)]),
      service_Category: new FormControl("-1", Validators.required),
      serviceSub_Category: new FormControl("-1", Validators.required),
      Name: new FormControl("", Validators.required),
      fatherName: new FormControl("", ),
      fname: new FormControl("", Validators.required),
      mname: new FormControl("", Validators.required),
      // fatherNames: new FormControl("",),
      AppointmentOrder: new FormControl('', Validators.required),
      dob: new FormControl("", Validators.required),
      mobile_No: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]),
      // DOCUMENT
      file: new FormControl('', Validators.required),
      assigened: new FormControl('', Validators.required),
      Description: new FormControl("-1", Validators.required),
      Appointmentdate: new FormControl(new Date(), Validators.required,),
      remark: new FormControl('', Validators.required),
      ram: new FormControl('', Validators.required),
      getTodaydate : new FormControl ('', Validators.required)


    });


   

    this.someFunction()

    this.EmpRegistration.valueChanges.subscribe((v) => {
      this.isNextDisabled = !this.EmpRegistration.valid;
    });
  }

  // EmpDocDetail: any = [];
  EmpDocDetail = new Array();
  // {

  // }

  fileName = new String();
  fileData = new String();


  ///////  search Janaaddhar Id
   
  ///////  search Janaaddhar Id
  JanAadharId: string = '';
  getJanAadhar() {
    var myusername = (<HTMLInputElement>document.getElementById("JanadharInfodata")).value;
    var vl = (<HTMLInputElement>document.getElementById("sptxt"));
    
    if (myusername.length < 10) 
    {
      vl.innerText = "Not Valid Jan Aadhar Number";
      this.EmpRegistration.reset();
      this.JanadharInfodata = [];
      return;

    }
    else {

      // vl.innerText = "Valid Janadhar Data";
      // this.submitted = true;

      // this.EmpRegistration.reset();
      // alert('this is id : ' + this.JanAadharId);
      let requestedDatas = { janAadharId: this.JanAadharId }

      this.apiService.getJanadharInfo(requestedDatas).subscribe(res => {

        if (res.data.status = 200) {

          this.JanadharInfodata = res.data

        }
       
        console.log(this.JanadharInfodata.data)
      })

    }
  }

  // autolode data selecter
  setFormValue(formname: FormGroup, fields: []): any {

  }

  updateSorting(abc: any) {
    this.selectedRecord = this.JanadharInfodata.filter((item: any) => {
      return item.janMid == abc.target.value;
   
    })[0];

    //console.log(this.selectedRecord )

    // save data in selector 
    this.EmpRegistration.patchValue({
      employeeType: this.selectedRecord.employeeType,
      service_Category: this.selectedRecord.serviceCategoryId,
      serviceSub_Category: this.selectedRecord.subServiceCategory,
      Name: this.selectedRecord.nameEng,
      name_hindi: this.selectedRecord.nameHnd,
      fname: this.selectedRecord.fnameEng,
      mname: this.selectedRecord.mnameEng,
      dob: this.selectedRecord.dob,
      bankAccountNumber: this.selectedRecord.acc,
      IfscCode: this.selectedRecord.ifsc,
      BankName: this.selectedRecord.bankName,
      BranchName: this.selectedRecord.bankBranch,
      mobile_No: this.selectedRecord.mobile,
      // addhar_no: this.selectedRecord.aadhar,
    });


  }

  selectFile(files:any)
  {
   this.selectedFiles=files.target.files[0].name;
  }
  ///////// submit data
  submitted = false;
  onSubmit() {
    this.submitted = true;

    // if(this.EmpRegistration.controls["service_Category"].value <= 1)
    // {
    //   alert('test service category');
    // }
    // else{
    
    // }


  //   {
  //     if (this.EmpRegistration.controls["service_Category"].value <= 0)
  //        alert('this option is selected');
  //      else
  //        alert('this is not');
  // }

    if (this.EmpRegistration.invalid) {
      // empSave local json file in api
      let data = {
        "janAadharId": this.JanAadharId,
        "memberId": this.EmpRegistration.controls["MemberID"].value,
        "employeeType": this.EmpRegistration.controls["employeeType"].value,
        "serviceCategoryId": this.EmpRegistration.controls["service_Category"].value,
        "subServiceCategory": this.EmpRegistration.controls["serviceSub_Category"].value,
        "empName": this.EmpRegistration.controls["Name"].value,
        "appomentOrderNo": this.EmpRegistration.controls["AppointmentOrder"].value,
        "dob": this.EmpRegistration.controls["dob"].value,
        "mobile": 1234567890,
        "icreatedBy": 3,
        "iofficeId":1,
        "fatherName": this.EmpRegistration.controls["fname"].value,
        "appomentDate": this.EmpRegistration.controls["Appointmentdate"].value,
        "motherName": this.EmpRegistration.controls["mname"].value,
      }

      this.apiService.empRegistrationSave(data).subscribe({
        next: (res) => {
          // var getCasteCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            alert("Save As Draft Successfully");
            this.empSavedata = res.data
            this.rid=res.data.requestId
            // alert( this.rid)
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
    else {
      alert("form is invalid");
    }
  

   
  }


  // Define Varivale

  EmployeeTypedata: any = [];

  private _ServiceCategorygdata: any;
  private _SubServiceCategorydata: any;
  private _anadharInfodata: any;
  // EmployeeType
  someFunction(): void {
    // getEmployeeType
    this.apiService.getEmployeeType().subscribe(res => {
      if (res.data.status = 200) {
        this.EmployeeTypedata = res.data
      }
      console.log(this.EmployeeTypedata)
    })


    
    // getServiceCategoryg
    this.apiService.getServiceCategoryg().subscribe(res => {
      if (res.data.status = 200) {
        this.ServiceCategorygdata = res.data
      }
      console.log(this.ServiceCategorygdata)
    })

    //////////// getDocumentType

    this.apiService.getDocumentType().subscribe(res => {
      if (res.data.status = 200) {
        this.DocumentTypedata = res.data
      }
      console.log(this.DocumentTypedata)
    })
  }

  finalsubmit(): void {

    let SaveDocumentFile = new FormData();

    SaveDocumentFile.append("file", this.file);

    // SaveDocumentFile.append("document", this.document,
    //  );

    this.assignedto = (<HTMLInputElement>document.getElementById("assigened")).value;
    this.rem = (<HTMLInputElement>document.getElementById("remark")).value;
    this.des = (<HTMLInputElement>document.getElementById("Description")).value;



   
    // alert(this.EmpRegistration.controls["assigened"].value)
    SaveDocumentFile.append("assignTo", this.assignedto);
    SaveDocumentFile.append("remarks", this.rem);
    SaveDocumentFile.append("requestId", this.rid);
    SaveDocumentFile.append("discription", this.des);

    // alert(this.rid),
    // }

    this.apiService.employeeRegistrationDocumentSave(SaveDocumentFile).subscribe(res => {
      if (res.data.status = 200) {
        this.employeeRegistrationDocumentSavedata = res.data
      }
      alert("Document saved Successfully,"  +  " Request Id is :" + this.rid +  ". Kindly save this for future reference.");
      console.log(this.employeeRegistrationDocumentSavedata)
    })
  }

  EmpoyeeDocumentInWsdldata(_EmpoyeeDocumentInWsdldata: any) {
    throw new Error("Method not implemented.");
  }

  getSubServiceCategory(event: any) {
    // alert(event.target.value)
    let requestedData = {
      serviceCategoryId: event.target.value
    }
    this.apiService.getSubServiceCategory(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.SubServiceCategorydata = res.data
      }
      console.log(this.SubServiceCategorydata)
    })




  }
  data() {
    throw new Error("Method not implemented.");
  }


  // number validation


  getToday(): string {
    // var test   = document.getElementById("appt");
    // console.log(test);
   
     console.log(new Date().toISOString());
    return new Date().toISOString().split('T')[0]
   
  }

  getMinDate():string{
    return new Date('01/11/2021').toISOString().split('T')[0]

  }

  disableDate():void{
    console.log(this.EmpRegistration.controls['Appointmentdate'].value);
    this.EmpRegistration.controls['Appointmentdate'].disable();
    this.showEdit=true;
   
  }

  enableInput():void{
    this.EmpRegistration.controls['Appointmentdate'].enable();
    this.showEdit=false;
  }


  numberOnly(event: { which: any; keyCode: any; }): boolean {

    //alert(this.EmpRegistration.controls['JanadharInfodata'].valid);
    this.disableSearch = true;
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;

    }
    return true;

  }

  // Only AlphaNumeric with Some Characters [-_ ]
  keyPressAlphaNumericWithCharacters(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    // Allow numbers, alpahbets, space, underscore
    if (/[a-zA-Z0-9-_ /.]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onClicked(val: any) {
    this.checked = val;
  }

}

function alertWithSuccess() {
  throw new Error("Function not implemented.");
}

function savedatas() {
  throw new Error("Function not implemented.");
}

