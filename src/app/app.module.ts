import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { DescribeComponent } from './describe/describe.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    ChallengesComponent,
    HelpComponent,
    DescribeComponent,
    ReviewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
