import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleListService } from 'src/app/services/article-list.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList : Article[];

  carouselPosition = {
    maxWidth: '600px',
    width: '100%',
    margin: '3% auto 0 auto',
  }
  
  constructor(private articleListService: ArticleListService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleListService.getArticles(0, 5).subscribe(
      (articles) => {
        console.log(JSON.stringify(articles));
        this.articleList = articles;
      }
    );
  }
}
