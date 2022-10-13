import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import{TcnewsapiService} from './service/tcnewsapi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    BusinessComponent,
    TopheadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
