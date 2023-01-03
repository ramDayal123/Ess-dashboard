import {EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachfile',
  templateUrl: './attachfile.component.html',
  styleUrls: ['./attachfile.component.css']
})

export class AttachfileComponent implements OnInit {
  selectedFiles: any;
 

  constructor() { }

  ngOnInit(): void {
  }
  
 selectFile(files: any) {
  this.selectedFiles=files.target.files[0].name;
}
}
