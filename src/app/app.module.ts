import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldService } from './hello-world.service';
import { HttpClientModule } from '@angular/common/http';
//import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [HelloWorldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
