import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgrondComponent } from './backgrond/backgrond.component';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgrondComponent,
    BackgroundimageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
