import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { Article } from 'src/app/models/article';
import { ArticleDetailService } from 'src/app/services/article-detail.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;
  replyContent: string;
  isReplying: boolean;

  constructor(
    private articleDetailService: ArticleDetailService,
  ) { }

  ngOnInit(): void {
    this.getArticle();
    this.isReplying = false;
  }

  // idに紐付いた記事の詳細情報
  getArticle() {
    const id = 1;
    this.articleDetailService.getArticle(id).subscribe(
      (article) => {
        console.log('SUCCESS: ' + JSON.stringify(article));
        this.article = article;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: articleId = ' + id + 'is Not Found. ');
        } else {
          throw error;
        }
      });
  }
  // 記事にいいねする
  nice() {
    this.articleDetailService.nice(this.article.articleId).subscribe(
      (article) => {
        console.log('SUCCESS: niceCount: ' + article.niceCount);
        this.article.niceCount = article.niceCount;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('ERROR: articleId = ' + this.article.niceCount + 'is Not Found. ');
        } else {
          throw error;
        }
      });
  }
  // 記事にコメントする
  onSubmit(f: NgForm) {
    const replyContent = f.value.replyContent;
    this.articleDetailService.createReply({
      articleId: this.article.articleId.toString(),
      replyContent
    }).subscribe(
      (reply) => {
        console.log('SUCCESS: ' + JSON.stringify(reply));
        this.switchReplying();
        this.getArticle();
      },
      (error: AppError) => {
        if (error instanceof BadRequestError) {
          alert('Bad Request\n' + JSON.stringify(error));
        } else if (error instanceof NotFoundError) {
          alert('Not Found\n' + JSON.stringify(error));
        } else {
          alert('Unknown Error\n' + JSON.stringify(error));
          throw error;
        }
      });
  }
  // コメント入力欄の表示切り替え
  switchReplying() {
    this.isReplying = !this.isReplying;
    this.replyContent = '';
  }
}
