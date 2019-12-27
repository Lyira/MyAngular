import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MockdataComponent } from './mockdata/mockdata.component';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './feed/feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Light404Component } from './light404/light404.component';
import { Dark404Component } from './dark404/dark404.component';
import { ProfileComponent } from './profile/profile.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    Light404Component,
    Dark404Component,
    ProfileComponent,
    // MockdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
