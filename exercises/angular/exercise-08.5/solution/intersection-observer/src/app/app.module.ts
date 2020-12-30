import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationOnIntersectionComponent } from './animation-on-intersection/animation-on-intersection.component';
import { LoadTableDataOnIntersectionComponent } from './load-table-data-on-intersection/load-table-data-on-intersection.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationOnIntersectionComponent,
    LoadTableDataOnIntersectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
