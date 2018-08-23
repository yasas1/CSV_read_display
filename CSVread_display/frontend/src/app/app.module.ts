import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CsvReadserviceService } from './csv-readservice.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    
  ],
  providers: [CsvReadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
