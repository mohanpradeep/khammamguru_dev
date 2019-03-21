import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KhammamComponent } from './khammam/khammam.component';
import { HeaderComponent } from './khammam/header/header.component';
import { FooterComponent } from './khammam/footer/footer.component';
import { CategoryComponent } from './khammam/category/category.component';
import { SubcategoryComponent } from './khammam/subcategory/subcategory.component';
import { ProductLandingPageComponent } from './khammam/product-landing-page/product-landing-page.component';
import { SubcategoryService } from './khammam/service/subcategory.service';
import { ProductLandingPageService } from './khammam/service/product-landing-page.service';
import { CategoryService } from './khammam/service/category.service';
import { InformationComponent } from './khammam/information/information.component';
import { InformationService } from './khammam/service/information.service';


@NgModule({
  declarations: [
    AppComponent,
    KhammamComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SubcategoryComponent,
    ProductLandingPageComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    InformationService,
    CategoryService,
    ProductLandingPageService,
    SubcategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
