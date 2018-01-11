
import {Injectable, Inject}     from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {LocalStorageService} from "./local-storage.service";
import {ConstantConfig} from "../config/constant.config";

@Injectable()
export class HttpService {
  // Resolve HTTP using the constructor
  constructor (private http: HttpClient ,@Inject(LocalStorageService)private localStorage:LocalStorageService) {}

  // GET REQUEST
  get(url) : Observable<any>{

    // Create a request option
    let options = {
      headers: {
        'Content-Type':'application/json',
        'Authorization': this.localStorage.get(ConstantConfig.AUTH_TOKEN)
      }
    };

    //using get request
    return this.http.get(url,options)
    // and calling .json() on the response to return data
      .map((res:any) => res ).catch((err:any) => Observable.throw(err['error'] || err || 'Server error'))

  }

  //POST REQUEST
  post(url,obj: Object): Observable<any> {
      let body    = obj
      let options = { headers: {
          'Content-Type':'application/json',
          'Authorization': this.localStorage.get(ConstantConfig.AUTH_TOKEN)
      } }; // Create a request option

    //using post request
    return this.http.post(url, body, options) //using post request
      .map((res:any) => res ) //and calling .json() on the response to return data
      .catch((err:any) =>  Observable.throw(err['error'] || err || 'Server error')); //errors if any
  }

  //PUT Request
  put(url,obj: Object): Observable<any> {
    // Create a option
    let body    = JSON.stringify(obj); //Stringify payload
    let options = { headers: {
        'Content-Type':'application/json',
        'Authorization': this.localStorage.get(ConstantConfig.AUTH_TOKEN)
    } }; // Create a request option

    //using put request
    return this.http.put(url, body, options) //using put request
      .map((res:any) => res ) //and calling .json() on the response to return data
      .catch((err:any) => Observable.throw(err['error'] || err || 'Server error')); //errors if any
  }

  // DELETE Request
  delete (url,id:string): Observable<any> {
    // Create a option
    let options = { headers: {
      'Content-Type':'application/json',
      'Authorization': this.localStorage.get(ConstantConfig.AUTH_TOKEN)
    } };

    return this.http.delete(`${url}/`+id,options) //using delete request
      .map((res:any) => res ) // and calling .json() on the response to return data
      .catch((err:any) => Observable.throw(err['error']  || err || 'Server error')); //errors if any
  }
}
