import { AssetFieldsService } from './services/assetfields.service';
import { AssetsService } from './services/assets.service';
import { CommonService } from './services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    AssetsService,
    AssetFieldsService,
    CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
