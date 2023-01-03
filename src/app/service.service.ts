import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
// import { data } from 'jquery';

// import { map } from 'rxjs';
// const httpOptions = environment.httpOptions;


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  getEntitlementDetails() {
    throw new Error('Method not implemented.');
  }
  BaseUrl: any;
 
  // getServiceCategory() {
  //   throw new Error("Method not implemented.");
  // }
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // baseUrl = "http://localhost:3000/";
  //baseUrl = "http://172.22.32.36:8080/mdm/v1.0/";
  // baseUrl = environment.baseUrl;
  //const HttpHeaders = environment.headers;
  baseUrl01 = environment.baseUrl01;
  baseUrl02 = environment.baseUrl02;
  baseUrl03 = environment.baseUrl03;
  baseUrl04 = environment.baseUrl04;

  // get Marital Status
  getMaritalStatus() {
    return this.http.post<any>(`${this.baseUrl04}` + "getMaritalStatus", {});

  }
  // get Blood Group
  getBloodGroup() {
    return this.http.post<any>(`${this.baseUrl04}` + "getBloodGroup", {});

  }
  // get Gender
  getGender() {
    return this.http.post<any>(`${this.baseUrl04}` + "getGender", {});
  }
  // get getDisability Type
  getDisabilityType() {
    return this.http.post<any>(`${this.baseUrl04}` + "getDisabilityType", {});

  }

  // get Payee Type
  getPayeeType() {
    return this.http.post<any>(`${this.baseUrl01}` + "getPayeeType", {});
  }
  // get Service Sub Category
  getServiceSubCategory() {
     let requestedData = {
      serviceCategoryId: 1
    }
    return this.http.post<any>(`${this.baseUrl01}` + "getServiceSubCategory", requestedData);
  }

  // get Service Quota
  getServiceQuota(){
    return this.http.post<any>(`${this.baseUrl04}` + "getServiceQuota", {});

  }
 // getDesignation
 getDesignation(){
  return this.http.post<any>(`${this.baseUrl04}` + "getDesignation", {});

}
 // getDepartment
 getDepartment(){
  return this.http.post<any>(`${this.baseUrl04}` + "getDepartment", {});

}
   // Get Janaadhaar Data

  GetJanaadhaarData(janaadhaar: any) {
    return this.http.post(`${this.baseUrl01}` + `GetJanaadhaarData`, janaadhaar);
  }

  // get CasteCategory
  getCasteCategory(){
    return this.http.post<any>(`${this.baseUrl04}` + "getCasteCategory",{});
  
  }

  // session data
  getSession() {
    return this.http.get<any>('./assets/models/userLoginData.json');
  }
  // post session to update id
  postUpdateProcessId(data: any) {
    return this.http.post<any>('./assets/models/userLoginData.json', data )
  }

// /////////////////////////////// EmployeeType//////////////////////////////
   getEmployeeType() {
    return this.http.post<any>(`${this.baseUrl04}`+ "getEmployeeType",{})
  
  }

  // /////////////////////////////// Service Gategory//////////////////////////////
  getServiceCategoryg() {
    return this.http.post<any>(`${this.baseUrl04}`+ "getServiceCategory",{})
  
  }


  // /////////////////////////////// Service Gategory//////////////////////////////
  getSubServiceCategory(data:any) {
    return this.http.post<any>(`${this.baseUrl04}`+ "getSubServiceCategory",data)
  
  }

 // /////////////////////////////// JanAadharUserInfo//////////////////////////////
 getJanadharInfo(data:any) {
  return this.http.post<any>(`${this.baseUrl04}`+ "getJanadharInfo",data)

}


///////////////////  getEmpoyeeDocumentInWsdl

getEmpoyeeDocumentInWsdl(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "getEmpoyeeDocumentInWsdl",data)
}


///////////////////  saveEmpoyeeDocumentWSDL

saveEmpoyeeDocumentWSDL(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "saveEmpoyeeDocumentWSDL",data)
}


////////// getPayeeInbox

// getPayeePrev(data: any) {
//   return this.http.post<any>(`${this.baseUrl}`+ "getPayeePrev",data)
// }

////////// getPayeeInbox

getDocumentType() {
  return this.http.post<any>(`${this.baseUrl04}`+ "getDocumentType",{})
}


/////////////////// save data

empRegistrationSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "empRegistrationSave",data)
}
// ///////////// employeeRegistrationDocumentSave
employeeRegistrationDocumentSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "employeeRegistrationDocumentSave",data)
}


// ///// getInboxdata
getInboxdata(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+  "getInboxdata",data)
}
essEmployeePersonalDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmployeePersonalDetailsSave",data)
}


// ///////////// essEmpIdentificationNumberSave 2
essEmpIdentificationNumberSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpIdentificationNumberSave",data)
}


// ///////////// essEmpServiceDetailsSave 3
essEmpServiceDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpServiceDetailsSave",data)
}

// ///////////// essEmpBankDetailsSave
essEmpBankDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpBankDetailsSave",data)
}

// ///////////// essEmpDocumentSave 4
essEmpDocumentSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpDocumentSave",data)
}
// ///////////// essEmployeeAddressSave
essEmployeeAddressSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmployeeAddressSave",data)
}

// ///////////// essEmployeeAddressSave 5
essEmpFamilyDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpFamilyDetailsSave",data)
}


// ///////////// essEmployeeAddressSave 6
essEmpPayEntitlementSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmpPayEntitlementSave",data)
}


// ///////////// essEmployeeAddressSave 7
essEmployeeDatesSave(data: any) {
  return this.http.post<any>(`${this.baseUrl01}`+ "essEmployeeDatesSave",data)
}



// get Scheme Type AR
getSchemeType() {
  return this.http.post<any>(`${this.baseUrl02}` + "getSchemeType", {});
}

// get Family Relation AR
getFamilyRelation() {
  return this.http.post<any>(`${this.baseUrl04}` + "getFamilyRelation", {});
}
// get Date Type AR
getDateType() {
  return this.http.post<any>(`${this.baseUrl02}` + "getDateType", {});
}

// get ESS Request Type AR
getESSRequestType() {
  return this.http.post<any>(`${this.baseUrl01}` + "getESSRequestType", {});
}
// get ESS SubRequest Type AR
getESSSubRequestType(data:any) {
  return this.http.post<any>(`${this.baseUrl01}` + "getESSSubRequestType", data);
}

// get ESS URL AR
getESSUrl(data:any) {
  return this.http.post<any>(`${this.baseUrl01}` + "getESSUrl", data);
}

// getState
getState(){
  return this.http.post<any>(`${this.baseUrl04}`+ "getState",{})
}
// getState
getDistrict(stateId:any){
  return this.http.post<any>(`${this.baseUrl04}`+ "getDistrict",{'iStateId':stateId})
}

//getBlockMunicipal
getBlockMunicipal(data:any){
  return this.http.post<any>(`${this.baseUrl04}`+ "getMunicipalArea",data)
}
//getPanchayatWard
getPanchayatWard(data:any){
  return this.http.post<any>(`${this.baseUrl04}`+ "getGramPanchayat",data)
}
 //getWard
 getWard(data:any){
  return this.http.post<any>(`${this.baseUrl04}`+ "getWard",data)
}

// get Bank
  getBank() {
    return this.http.post<any>(`${this.baseUrl04}` + "getBank", {});
  }
// get Bank Branch
getBankBranch(data:any) {
  return this.http.post<any>(`${this.baseUrl04}` + "getBankBranch", data);
}
//getDaRate
getDaRate(){
  return this.http.post<any>(`${this.baseUrl02}` + "getDaRate",  {"daRate":2}); 
}

//getDaRate
getPayCommision(){
  return this.http.post<any>(`${this.baseUrl02}` + "getPayCommision",  {}); 
}

//getHra
getHra(){
  return this.http.post<any>(`${this.baseUrl02}` + "getHra",  {"payeeCommissionId":"5" }); 
}


getEmployeeDetail(empid:any){
  return this.http.post<any>(`${this.baseUrl02}` + "getEmployeeDetail",  {"employeeCode":empid }); 
}

//SubmitEntitySave
SubmitEntitySave(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "submitEntitySave", data);

}
essUpdateEmployeeDate(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "essUpdateEmployeeDate", data);

}
essBankAccountChangeRequest(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "essBankAccountChangeRequest", data);

}
essEmployeeNomineeUpdate(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "essEmployeeNomineeUpdate", data);

}
essUpdateOtherNumber(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "essUpdateOtherNumber", data);

}

// get tile url landing
getTileUrl(roleid:any){
  return this.http.post<any>(`${this.baseUrl02}` + "getTileUrl", {"InRoleId":roleid});
}
// get Ddo Grid
getDdoGrid(){
  return this.http.post<any>(`${this.baseUrl02}` + "getDdoGrid", {});

}
//get Compensatory Allowance Type
getCompensatoryAllowanceType(typeId:any){
  return this.http.post<any>(`${this.baseUrl03}` + "getCompensatoryAllowanceType", {
    "inTypeId":typeId
});
}
//get Rate Slab
getRateSlab(payeeCommissionId:any){
  return this.http.post<any>(`${this.baseUrl02}` + "getRateSlab", {"payeeCommissionId":payeeCommissionId });
}
//employeeCcaDetailSave
employeeCcaDetailSave(data:any){
  return this.http.post<any>(`${this.baseUrl01}` + "employeeCcaDetailSave", data);

}

// Get ESS Employee Detail
getEssEmployeeDetails(empID:any){
  return this.http.post<any>(`${this. baseUrl01}` + "getEssEmployeeDetails", {"employeeId":empID});
}

// get ESS Dashboard Notification
getEssNotification() {
  return this.http.post<any>(`${this. baseUrl01}` + "getEssNotification", {});
}

// get ESS Important Document
getEssImportantDocuments() {
  return this.http.post<any>(`${this. baseUrl01}` + "getEssImportantDocuments", {});
}


//**get Employee Information service** by bablu 

getEmployeeInfoemation(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getPersonalDetailSelect", data ); 
}
getEmployeeDateType(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeDateType", data ); 
}
getEmployeeNomineeUpdate(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeNomineeUpdate", data ); 
}
getEmployeeOtherNumberUpdate(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeOtherNumberUpdate", data ); 
}
getEmployeeBankChangeUpdate(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeBankChangeUpdate", data ); 
}
getEmployeeCCAUpdateRequest(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeCCAUpdateRequest", data ); 
}
getEmployeeHRAUpdateRequest(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getEmployeeHRAUpdateRequest", data ); 
}
getLoadDashboard(token:any){
  return this.http.post<any>("http://ifmstest.rajasthan.gov.in/employeelanding/getLoadDashboard", {"token":token} ); 

}
getESSDataLoadPersonal(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getESSDataLoadPersonal", data ); 
}
getESSRequestLoad(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getESSRequestLoad", data ); 
}
getESSDataLoadBankDetails(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getESSDataLoadBankDetails", data ); 
}
getESSDataLoadNominee(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"getESSDataLoadNominee", data ); 
}
essUpdateOtherNumberSelect(data:any){
  return this.http.post<any>(`${this. baseUrl01}` +"essUpdateOtherNumberSelect", data ); 
}
getEmpNomFamilyDetail(data:any) {
  return this.http.post<any>(`${this.baseUrl02}` + "getEmpNomFamilyDetail",data);
}

}