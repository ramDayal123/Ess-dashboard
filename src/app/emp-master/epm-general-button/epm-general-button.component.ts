import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-epm-general-button',
  templateUrl: './epm-general-button.component.html',
  styleUrls: ['./epm-general-button.component.css']
})
export class EpmGeneralButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeBtn(btname:any):void{
    debugger
    // $('.btnclr').addClass('btn btn-warning')
    // $('#'+btname).removeClass('btn btn-warning');
  }
}