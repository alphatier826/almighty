import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AHMv2';
  isLoad:boolean = false;
  newsContents = [];
  ngOnInit(){
    this.isLoad = true;
    setInterval(() => {
      this.isLoad = false;
    }, 2000);
    for (let index = 0; index < 10; index++) {
      this.newsContents.push(index+1 +' - Do Media Vultures Perpetuate Mass Shootings?');
      
    }
  }
}
