import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable()
export class ProductLandingPageService {

  constructor(private _http: HttpClient) { }

  get(id: any) {
    return this._http.get('http://khammamguru.com/api/single/' + id);
  }
}
