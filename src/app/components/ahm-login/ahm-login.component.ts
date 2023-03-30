import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahm-login',
  templateUrl: './ahm-login.component.html',
  styleUrls: ['./ahm-login.component.css']
})
export class AhmLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  userLogin(){
    this.router.navigate(['admin']);
  }

}
