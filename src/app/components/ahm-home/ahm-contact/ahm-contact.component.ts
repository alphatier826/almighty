import { Component, OnInit } from '@angular/core';
import { AlmightyService} from '../../../service/almight.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ahm-contact',
  templateUrl: './ahm-contact.component.html',
  styleUrls: ['./ahm-contact.component.css']
})
export class AhmContactComponent implements OnInit {

  constructor(private almightyService: AlmightyService,
              private toastr: ToastrService ) { }
  emailObj: any ={};
  ngOnInit() {
  }

  sendMail(){
    this.almightyService.sendMail(this.emailObj).subscribe( resp=>{
      if(resp.body.length != 0){
        this.emailObj = {};
        this.toastr.success("Your request has been sent.");
      }else{
        this.toastr.error("Server Error, Please email support@almightyalgo.com")
      }
    });
  }
}
