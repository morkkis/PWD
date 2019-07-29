import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import * as components from './components';
import { CatService } from './services/cat.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const com = [
  AppComponent,
  components.HeaderComponent,
  components.FooterComponent,
  components.SideBarComponent,
  components.CardsViewComponent,
  components.CardItemComponent,
];

@NgModule({
  declarations: [
    ...com
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
