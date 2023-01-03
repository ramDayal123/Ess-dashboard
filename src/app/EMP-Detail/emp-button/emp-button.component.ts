import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-button',
  templateUrl: './emp-button.component.html',
  styleUrls: ['./emp-button.component.css']
})
export class EmpButtonComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname]);
    }
}
