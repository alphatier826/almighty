import { Component, OnInit } from '@angular/core';
import { AlmightyService } from '../../../service/almight.service';

@Component({
  selector: 'app-ahm-pricing',
  templateUrl: './ahm-pricing.component.html',
  styleUrls: ['./ahm-pricing.component.css']
})
export class AhmPricingComponent implements OnInit {

  prices = []

  constructor(private almightyService: AlmightyService) { }

  ngOnInit() {
    const price = [{
      title: 'MONTHLY',
      amount: '11,500',
      features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '1 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
      isActive: false
    },{
      title: 'QUARTERLY',
      amount: '28,000',
      features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '3-4 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
      isActive: false
    },{
      title: 'HALF YEARLY',
      amount: '48,000',
      features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '10 - 15 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
      isActive: false
    },{
      title: 'YEARLY',
      amount: '88,000',
      features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '20 - 25 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
      isActive: false
    }];
    this.prices = price;
    this.almightyService.getNews().subscribe(
      (data: any) => {
        console.log(data)
        if(data && data.id){
         
        }
      },
      (err: any) => {
        console.error(err);
       }
    );

  }

}
