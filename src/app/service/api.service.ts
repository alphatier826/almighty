import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParameterCodec, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public wqmEndpoint: string = location.origin.match('4200')? "http://localhost:5000": "https://cute-pantsuit-crab.cyclic.app";
  constructor(private http: HttpClient) { }


  public getDefaultHeaders(){
    const defaultHeader = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json;charset=UTF-8',
    };
    return defaultHeader;
  }

public invokeAPI(path: string, method: string, request?: any, requestHeader?: any): Observable<HttpResponse<unknown>> {
    const url = this.wqmEndpoint + path;
    return this.getHttpService(url, method, requestHeader, request);
}

private getHttpService(url: string, method: string, requestHeader: any, requestData: any){
    const newHttpHeader = new HttpHeaders(Object.assign(requestHeader || {}, this.getDefaultHeaders()));
    const httpOptions = (requestHeader instanceof HttpHeaders) ? requestHeader : newHttpHeader;
    const newHTTPParams = new HttpParams({ encoder: new CustomHttpParamEncoder(), fromObject: requestData });
    switch (method) {
        case 'GET': return this.http.get(url, { observe: 'response', params: newHTTPParams, headers: httpOptions });
        case 'POST': return this.http.post(url, requestData, {observe: 'response', headers: httpOptions});
        case 'PUT': return this.http.put(url, requestData, {observe: 'response', headers: httpOptions});
        case 'PATCH': return this.http.patch(url, requestData, {observe: 'response', headers: httpOptions});
        case 'DELETE': return this.http.delete(url, { observe: 'response', params: newHTTPParams, headers: httpOptions });
        default: throw new Error('Invalid Method');
    }
}

}

class CustomHttpParamEncoder implements HttpParameterCodec {
    encodeKey(key: string): string {
      return encodeURIComponent(key);
    }
    encodeValue(value: string): string {
      return encodeURIComponent(value);
    }
    decodeKey(key: string): string {
      return decodeURIComponent(key);
    }
    decodeValue(value: string): string {
      return decodeURIComponent(value);
    }
  }