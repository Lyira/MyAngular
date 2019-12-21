import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {ArticleComponent} from './article/article.component';



const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'article', component: ArticleComponent},
  {path: '', redirectTo: './feed', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
