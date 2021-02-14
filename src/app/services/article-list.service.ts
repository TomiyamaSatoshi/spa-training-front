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
export class ArticleListService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    super();
  }

  getArticles(page: number, pageSize: number): Observable<any> {

    console.log('[getArticles] page = ' + page);
    console.log('[getArticles] pageSize = ' + pageSize);

    const params = new HttpParams()
      .set('offset', (page * pageSize).toString())
      .set('limit', pageSize.toString());

    return this.httpClient.get<Article[]>(this.apiUrl + '/article/list', { params })
     .pipe( catchError(this.handleError) ); 
  }

  countArticles(): Observable<any> {
    console.log('[countArticles]');
    return this.httpClient.get<any>(this.apiUrl + '/article/count')
      .pipe( catchError(this.handleError) );
  }

}
