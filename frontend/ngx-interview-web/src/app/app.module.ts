import { AssetFieldsService } from './services/assetfields.service';
import { AssetsService } from './services/assets.service';
import { CommonService } from './services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AssetsService,
    AssetFieldsService,
    CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
