import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DescribeComponent } from './describe/describe.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo :"/home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'challenge', component: ChallengesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'describe', component: DescribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
