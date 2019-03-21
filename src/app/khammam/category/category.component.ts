import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category: any;
id: any;
error = null;

  constructor(private _category: CategoryService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this._category.get(this.id).subscribe((res: any) => {
      this.category = res.data;
    }, (error: any) => {
    });
  }

}
