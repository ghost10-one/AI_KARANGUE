import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceComponent } from './price/price.component';
import { EroSectionComponent } from './ero-section/ero-section.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PriceComponent,
    EroSectionComponent,
    FooterComponent,
    InfoComponent,
    CarouselComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
