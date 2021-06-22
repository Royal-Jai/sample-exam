import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'about',component:HomeComponent},
  {path:'', redirectTo:'/about', pathMatch:'full'},
  {path:'experience', component:ExperienceComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'sklills', component:SkillsComponent},
  {path:'awards', component:AwardsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
