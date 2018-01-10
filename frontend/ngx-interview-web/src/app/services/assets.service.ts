import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Asset } from 'app/display-component/display-component.component';

@Injectable()
export class AssetsService {

  private assetUrl = 'Assets/';  // URL to web API

  constructor (private http: Http,
               private commonSvc: CommonService,
               private httpClient: HttpClient) {}

  getAssts(): Observable<any[]> {
    return this.http.get(this.commonSvc.getBaseUrl() + this.assetUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
