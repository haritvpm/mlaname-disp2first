import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertComponent } from './convert/convert.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';



@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
   
    
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
