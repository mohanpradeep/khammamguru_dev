import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
  constructor(private _category: HttpClient) { }

  get(id: any) {
    return this._category.get('http://khammamguru.com/api/subcategories/1/' + id);
  }
}
