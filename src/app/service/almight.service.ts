import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AlmightyService {

  constructor(private apiService: ApiService) { }

  /* get list of news */
  getNews(): Observable<any>{
    return this.apiService.invokeAPI(`/news`, 'GET');
  }

  sendMail(mailObj): Observable<any>{
    return this.apiService.invokeAPI(`/user/sendMail`, 'POST', mailObj);
  }
}