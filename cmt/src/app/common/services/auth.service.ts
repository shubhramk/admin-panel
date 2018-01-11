
import { Injectable }     from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from "./local-storage.service";
import {ConstantConfig} from "../config/constant.config";
import {HttpHeaders} from "@angular/common/http";

@Injectable()

@Injectable()
export class AuthService {
    constructor ( private http:HttpClient , private localStorage:LocalStorageService) {}
    //Auth REQUEST
    login(url,obj: Object): Promise<any>{
      let body = JSON.stringify(obj); // Stringify payload
      return this.http
        .post(url, body, {
          observe : 'response',
          headers: {
              'Content-Type':'application/json'
          }
        })
        .toPromise()
        .then((res:any) =>{
          return ({'response':res.body.payload,'token':res.headers.get("access-token")});
        })
        .catch((error) =>{
          return Promise.reject( error['error']['error'] || error || 'Server error')
        });
    }

    //check login status
   isLoggedIn():boolean{
       var data = this.localStorage.get(ConstantConfig.AUTH_TOKEN);
       return data ? true : false ;
   }
}
