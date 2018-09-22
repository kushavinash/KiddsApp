import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { AddComponent } from './math/add/add.component';
import { SubtractComponent } from './math/subtract/subtract.component';
import { MultiplyComponent } from './math/multiply/multiply.component';
import {AppRoutingModule} from  './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevideComponent } from './math/devide/devide.component'

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DevideComponent   
  ],
  imports: [
    
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule  ,   
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
