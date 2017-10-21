import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccumComponent } from './accum/accum.component';
import { AdderComponent } from './adder/adder.component';

@NgModule({
  declarations: [
    AppComponent,
    AccumComponent,
    AdderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
