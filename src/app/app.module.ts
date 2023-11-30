import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // 追加

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SecondpageComponent, FirstpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
