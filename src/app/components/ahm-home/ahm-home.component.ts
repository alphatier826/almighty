import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ahm-home',
  templateUrl: './ahm-home.component.html',
  styleUrls: ['./ahm-home.component.scss']
})
export class AhmHomeComponent implements OnInit {

  title = 'AHMv2';
  isLoad:boolean = false;
  newsContents = [];
  ngOnInit(){
    this.isLoad = true;
    setInterval(() => {
      this.isLoad = false;
    }, 2000);
    for (let index = 0; index < 10; index++) {
      this.newsContents.push(index+1 +' - Do we Media Vultures Perpetuate Mass Shootings?');
      
    }
    this.listResources
  }

  listResources(): Observable<any> {
    const obj:any = {name:'nik'};
    return obj;
  }

}
