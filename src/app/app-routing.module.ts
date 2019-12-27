import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {ArticleComponent} from './article/article.component';
import {Light404Component} from './light404/light404.component';
import {Dark404Component} from './dark404/dark404.component';
import {ProfileComponent} from './profile/profile.component';




const routes: Routes = [
  { path: 'feed' , component: FeedComponent },
  { path: 'profile' , component: ProfileComponent },
  { path: 'article' , component: ArticleComponent },
  { path: 'light404' , component: Light404Component },
  { path: '404' , component: Dark404Component },
  { path: 'dark404' , component: Dark404Component },
  { path: '**' , component: Light404Component },
  { path: '' , redirectTo: '/feed', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

