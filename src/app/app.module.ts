import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceDetailsComponent } from './employee-service-details/employee-service-details.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
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
import { MatNativeDateModule } from '@angular/material/core';
//RAm Dayal EMP registration and EMP detail
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
//Data Table Angular material
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatatableComponent } from './datatable/datatable.component';
import { AttachfileComponent } from './attachfile/attachfile.component';






@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    HeaderComponent,
    ComponentsComponent,
    FooterComponent,
    FooterLandingComponent,
    StyleguideComponent,
    SidemenuComponent,
    EmployeeServiceDetailsComponent,
    UsernameComponent,
    LandingpageComponent,
    LoginComponent,
    ESSDashboardComponent, EmpGendetailComponent,
    EmployeeIdNumberComponent,
    EmployeeDateComponent,
    EmployeeFamilyDetailsComponent,
    EmployeeBankDetailsComponent,
    EmployeeDocumentsComponent,
    EmployeePayEntitlementComponent,
    EpmGeneralButtonComponent,
    EmpAddressComponent,
    EssReqComponent,
    EmployeeSelfServiceComponent,
    BankAccNoComponent,
    EmployeeDateTypeComponent,
    EmplyeeNomineeUpdateComponent,
    UpdateNumberComponent,
    EmployeRegistrationComponent,
    AddressComponent,
    BankDetailsComponent,
    DocumentComponent,
    EmpButtonComponent,
    EmpDateComponent,
    EmployeeDetailsComponent,
    EmployeeIdentificationComponent,
    EmployeeServiceComponent,
    FamilyDetailsComponent,
    PayEntitlementComponent,
    DatatableComponent,
    AttachfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
