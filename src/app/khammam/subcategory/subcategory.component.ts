import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../service/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
subcategory: any;
id: any;
error = null;

  constructor(private _subcategory: SubcategoryService, private route: ActivatedRoute) {
                this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this._subcategory.get(this.id).subscribe((res: any) => {
      this.subcategory = res.data;
    }, (error: any) => {
      console.log(this.error);
    });
  }

}
