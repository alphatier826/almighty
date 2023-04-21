import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahm-admin-service',
  templateUrl: './ahm-admin-service.component.html',
  styleUrls: ['./ahm-admin-service.component.css']
})
export class AhmAdminServiceComponent implements OnInit {

  constructor() { }
  selectedTab:number = -1;
  iconImg:any;
  tileTemplate = {title: "Title", icon:"", desc:"Provide the short description about this service."}
  serviceData:any = [
    {title:"Algo Trading", icon:"", desc:"We will provide you the best platform for doing Auto Trading with your own Intra day and positional based strategies which will save your money and time Controlling your"},
    {title:"Auto Buy Sell Signal", icon:"", desc:"You could know precisely when to purchase, hold or sell stocks or commodities. We are providing 100% exact programmed software.Our items have been given Complete Artificial."},
    {title:"MQL Developments", icon:"", desc:"We use MetaTrader Software to make automated trading softwares and financial market indicators.If you are growing."},
    {title:"API Bridge", icon:"", desc:"API Bridge is a set of programming interface, pincode and Places is first programming interface. APIBridge permits you to algo trade with various stages like MT4. "},
  ]
  ngOnInit() {
  }
  selectedTabMethod(indx){
    console.log(indx);
  }
  addTileService(){
    this.serviceData.push(this.tileTemplate);
  }

  importAttachment(event: any) {
    const [file] = event.target.files;
    if(file) {
      const fileReader: any = new FileReader();
      fileReader.onload = (e) => {
        this.iconImg = fileReader.result.toString();
      };
      fileReader.readAsDataURL(file);
    }
  }

  deselectTab(){
    this.selectedTab = -1;
  }

}

9973167103