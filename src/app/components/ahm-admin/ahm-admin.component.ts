import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahm-admin',
  templateUrl: './ahm-admin.component.html',
  styleUrls: ['./ahm-admin.component.css']
})
export class AhmAdminComponent implements OnInit {

  isSelected = 'news';
  constructor() { }

  ngOnInit() {
  }

  launchWebPortal(){
    window.open(window.location.origin, '_blank');
  }
}
