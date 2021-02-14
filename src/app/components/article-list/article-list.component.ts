import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { Article } from 'src/app/models/article';
import { ArticleListService } from 'src/app/services/article-list.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList : Article[];
  currentPage: number;
  maxPage: number;
  PAGE_SIZE = 5;

  carouselPosition = {
    maxWidth: '600px',
    width: '100%',
    margin: '3% auto 0 auto',
  }
  
  constructor(
    private route: ActivatedRoute,
    private articleListService: ArticleListService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( params => {
      let page = +params.get('page');
      console.log('subscribe: ' + page);
      if (isNaN(page)) {
        page = 0;
      }
      this.pagenate(page);
      this.getArticles(page);
    });
  }

  getArticles(page: number) {
    this.articleListService.getArticles(page, this.PAGE_SIZE).subscribe(
      (articles) => {
        console.log(JSON.stringify(articles));
        this.articleList = articles;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: Not Found.');
        } else if (error instanceof BadRequestError) {
          console.log('ERROR: Bad Request.');
        } else {
          throw error;
        }
      }
    );
  }

  pagenate(page: number) {
    this.currentPage = page;
    this.articleListService.countArticles().subscribe(
      (cnt) => {
        console.log('SUCCESS:' + JSON.stringify(cnt));
        const articleCount = cnt.count;
        console.log('articleCount: ' + articleCount);
        const maxPageCount = Math.ceil(articleCount / this.PAGE_SIZE);
        console.log('maxPageCount: ' + maxPageCount);
        this.maxPage = maxPageCount - 1;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: Not Found.');
        } else if (error instanceof BadRequestError) {
          console.log('ERROR: Bad Request.');
        } else {
          throw error;
        }
      }
    )
  }
}
