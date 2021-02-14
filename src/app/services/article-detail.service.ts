import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class ArticleDetailService extends BaseService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    super();
  }
  // idに紐付いた記事の詳細情報取得
  getArticle(articleId: number): Observable<any> {
    console.log('[getArticle] articleId: ' + articleId);
    return this.httpClient.get<Article>(this.apiUrl + '/article/' + articleId)
      .pipe( catchError(this.handleError) );
  }
  // 記事にいいねする
  createReply(reply: object): Observable<any> {
    console.log('[createReply] reply: ' + JSON.stringify(reply));
    return this.httpClient.post<any>(this.apiUrl + '/reply', reply)
      .pipe( catchError(this.handleError) );
  }
  // 記事にコメントする
  nice(articleId: number): Observable<any> {
    console.log('[nice] articleId: ' + articleId);
    const params = new HttpParams().set('articleId', articleId.toString());
    console.log('servise: ' + params.has('articleId'));
    return this.httpClient.post<any>(this.apiUrl + '/article/nice', params)
      .pipe( catchError(this.handleError) );
  }
}
