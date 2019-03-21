import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductLandingPageService } from '../service/product-landing-page.service';

@Component({
  selector: 'app-product-landing-page',
  templateUrl: './product-landing-page.component.html',
  styleUrls: ['./product-landing-page.component.css']
})
export class ProductLandingPageComponent implements OnInit {
product: any;
id: any;
error = null;

  constructor(private _product: ProductLandingPageService, private route: ActivatedRoute) {
      this.id = this.route.snapshot.params.id;
   }
  ngOnInit() {
    this._product.get(this.id).subscribe((res: any) => {
      this.product = res.data;
    }, (error: any) => {
      console.log(this.error);
    });
  }

}
