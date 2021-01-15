
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule}from'@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms'
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NzLayoutModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzListModule,
    NzDividerModule,
    NzModalModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyArPavS5LnM3XYlpAzhLjPKKdEVh7FUKaE",
  authDomain: "posts-4a8f3.firebaseapp.com",
  projectId: "posts-4a8f3",
  storageBucket: "posts-4a8f3.appspot.com",
  messagingSenderId: "625200929383",
  appId: "1:625200929383:web:e8bd025b54eeacf31e52c2",
  measurementId: "G-WJ32G13L33"
    }),
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
