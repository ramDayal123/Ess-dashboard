import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeServiceDetailsComponent } from './employee-service-details/employee-service-details.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { LoginComponent } from './login/login.component';
import { ESSDashboardComponent } from './ess-dashboard/ess-dashboard.component';
import { EmpAddressComponent } from './emp-master/emp-address/emp-address.component';
import { EmpGendetailComponent } from './emp-master/emp-gendetail/emp-gendetail.component';
import { EmployeeIdNumberComponent } from './emp-master/employee-id-number/employee-id-number.component';
import { EmployeeDateComponent } from './emp-master/employee-date/employee-date.component';
import { EmployeeFamilyDetailsComponent } from './emp-master/employee-family-details/employee-family-details.component';
import { EmployeeBankDetailsComponent } from './emp-master/employee-bank-details/employee-bank-details.component';
import { EmployeeDocumentsComponent } from './emp-master/employee-documents/employee-documents.component';
import { EmployeePayEntitlementComponent } from './emp-master/employee-pay-entitlement/employee-pay-entitlement.component';
import { EpmGeneralButtonComponent } from './emp-master/epm-general-button/epm-general-button.component';

import { EssReqComponent } from './ESS/ess-req/ess-req.component';
import { EmployeeSelfServiceComponent } from './ESS/employee-self-service/employee-self-service.component';
import { BankAccNoComponent } from './ESS/bank-acc-no/bank-acc-no.component';
import { EmployeeDateTypeComponent } from './ESS/employee-date-type/employee-date-type.component';
import { EmplyeeNomineeUpdateComponent } from './ESS/emplyee-nominee-update/emplyee-nominee-update.component';
import { UpdateNumberComponent } from './ESS/update-number/update-number.component';

//RAM DAYAL

import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { AddressComponent } from './EMP-Detail/address/address.component';
import { BankDetailsComponent } from './EMP-Detail/bank-details/bank-details.component';
import { DocumentComponent } from './EMP-Detail/document/document.component';
import { EmpButtonComponent } from './EMP-Detail/emp-button/emp-button.component';
import { EmpDateComponent } from './EMP-Detail/emp-date/emp-date.component';
import { EmployeeDetailsComponent } from './EMP-Detail/employee-details/employee-details.component';
import { EmployeeIdentificationComponent } from './EMP-Detail/employee-identification/employee-identification.component';
import { EmployeeServiceComponent } from './EMP-Detail/employee-service/employee-service.component';
import { FamilyDetailsComponent } from './EMP-Detail/family-details/family-details.component';
import { PayEntitlementComponent } from './EMP-Detail/pay-entitlement/pay-entitlement.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AttachfileComponent } from './attachfile/attachfile.component';

const routes: Routes = [
  {path:'landing-page', component:LandingpageComponent},
  {path:'MST-Sample', component:EmployeeServiceDetailsComponent},
  {path:'',component:LandingpageComponent},
  {path:'login', component:LoginComponent},
  {path:'ESS-Dashboard', component:ESSDashboardComponent},
  {path:'data-table',component:DatatableComponent},
  {path:'choose-file', component:AttachfileComponent},

  // Bablu EMP MST
  {path:'emp-address', component:EmpAddressComponent},
  {path:'emp-gendetail', component:EmpGendetailComponent},
  {path:'employee-id-number', component:EmployeeIdNumberComponent},
  {path:'employee-date', component:EmployeeDateComponent},
  {path:'employee-family-details', component:EmployeeFamilyDetailsComponent},
  {path:'employee-bank-details', component:EmployeeBankDetailsComponent},
  {path:'employee-documents', component:EmployeeDocumentsComponent},
  {path:'employee-pay-entitlement', component:EmployeePayEntitlementComponent},
  {path:'epm-general-button', component:EpmGeneralButtonComponent},


  //Bhupendra ESS 
  {path:'Ess-Req',component:EssReqComponent},
  {path: 'employee-self-service', component:EmployeeSelfServiceComponent},
  {path: 'employee-date-type', component:EmployeeDateTypeComponent},
  {path: 'employee-nominee-update', component:EmplyeeNomineeUpdateComponent},
  {path: 'update-number', component:UpdateNumberComponent},
  {path: 'bank-acc-number', component:BankAccNoComponent},

  //RAM DAYAL
  {path:'employee-details', component:EmployeeDetailsComponent},
  {path:'employe_registration',component:EmployeRegistrationComponent},
  {path:'employee-details', component:EmployeeDetailsComponent},
  {path:'EmployeeService', component:EmployeeServiceComponent},
  {path:'address',component:AddressComponent},
  {path:'familyDetails', component:FamilyDetailsComponent},
  {path:'bank-details', component:BankDetailsComponent},
  {path:'pay-entitlement', component:PayEntitlementComponent},
  {path:'document', component:DocumentComponent},
  {path:'EmpDate', component:EmpDateComponent},
   {path:'button',component:EmpButtonComponent},
  {path:'employeeIdentification', component:EmployeeIdentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true , relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
