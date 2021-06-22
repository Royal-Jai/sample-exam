import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidecomponentComponent } from './sidecomponent/sidecomponent.component';
import { AnimatedDigitComponent } from './animated/animated-digit/animated-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    PortfolioComponent,
    SkillsComponent,
    AwardsComponent,
    ContactComponent,
    HeaderComponent,
    SidecomponentComponent,
    AnimatedDigitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
