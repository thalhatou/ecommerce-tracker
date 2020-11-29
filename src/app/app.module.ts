import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { HelpComponent } from './help/help.component';
import {AppRoutingModule} from './app-routing.module'
const config =  {
    apiKey: "AIzaSyCroFlqCDzOaGVIxoJ56PyQfbzQSlORedc",
    authDomain: "ecommerce-tracker-289ea.firebaseapp.com",
    databaseURL: "https://ecommerce-tracker-289ea.firebaseio.com",
    projectId: "ecommerce-tracker-289ea",
    storageBucket: "ecommerce-tracker-289ea.appspot.com",
    messagingSenderId: "125239719142",
    appId: "1:125239719142:web:e0d2162338a0a0de83b727"
  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    ChallengesComponent,
    HelpComponent,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
















