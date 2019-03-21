
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhammamComponent } from './khammam/khammam.component';
import { InformationComponent } from './khammam/information/information.component';
import { CategoryComponent } from './khammam/category/category.component';
import { SubcategoryComponent } from './khammam/subcategory/subcategory.component';
import { ProductLandingPageComponent } from './khammam/product-landing-page/product-landing-page.component';

const routes: Routes = [
  {path: '', component: KhammamComponent},
  {path: 'information', component: InformationComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'subcategory/:id', component: SubcategoryComponent},
  {path: 'product/:id', component: ProductLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
