import { HttpClientModule } from '@angular/common/http';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlideComponent } from './modules/slide/slide.component';
import { AboutComponent } from './modules/about/about.component';
import { EducationComponent } from './modules/education/education.component';
import { WorkComponent } from './modules/work/work.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    AboutComponent,    
    EducationComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
