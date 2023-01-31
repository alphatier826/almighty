import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AHMv2';
  isLoad:boolean = false;
  
  ngOnInit(){
    this.isLoad = true;
    setInterval(() => {
      this.isLoad = false;
    }, 2000);
  }
}
