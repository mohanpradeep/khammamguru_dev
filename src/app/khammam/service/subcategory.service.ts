import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable()
export class SubcategoryService {
  constructor(private _http: HttpClient ) { }
  get(id: any) {
    return this._http.get('http://khammamguru.com/api/listings/1/' + id);
  }
}
