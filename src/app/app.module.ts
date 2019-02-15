import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DemoFormSkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
