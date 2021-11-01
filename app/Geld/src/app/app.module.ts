import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { dolarToRealComponent } from './components/dolarToReal.component';
import { realToDolarComponent } from './components/realToDolar.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, dolarToRealComponent, realToDolarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
