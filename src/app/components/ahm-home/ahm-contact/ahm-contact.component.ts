import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahm-contact',
  templateUrl: './ahm-contact.component.html',
  styleUrls: ['./ahm-contact.component.css']
})
export class AhmContactComponent implements OnInit {

  constructor() { }
  emailObj: any ={name:'',email:'', subject:'', message:''};
  ngOnInit() {
  }

}
