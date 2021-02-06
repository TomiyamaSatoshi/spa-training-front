import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from '../models/article';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService extends BaseService{

  constructor(private httpClient: HttpClient) { 
    super();
  }

  getArticles(page: number, pageSize: number): Observable<any> {

    const params = new HttpParams()
      .set('offset', (page * pageSize).toString())
      .set('limit', pageSize.toString());

    return this.httpClient.get<Article[]>('http;//localhost:8080/article/lisr', { params })
     .pipe( catchError(this.handleError) ); 
  }


}
