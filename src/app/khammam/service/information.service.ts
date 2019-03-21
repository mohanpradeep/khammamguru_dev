import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationService {
  constructor(private _category: HttpClient) { }

  get() {
    return this._category.get('http://khammamguru.com/api/categories/1');
   }
}
