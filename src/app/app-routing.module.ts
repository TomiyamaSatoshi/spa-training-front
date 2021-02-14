import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleCreateReactiveComponent } from './components/article-create/article-create-reactive/article-create-reactive.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'article/create', component: ArticleCreateReactiveComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: '**', component: ArticleListComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
