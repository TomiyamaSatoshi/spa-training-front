import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(private httpClient: HttpClient) { }

  getArticles(page: number, pageSize: number): Observable<any> {

    const params = new HttpParams()
      .set('offset', (page * pageSize).toString())
      .set('limit', pageSize.toString());

    return this.httpClient.get<Article[]>('http;//localhost:8080/article/list', { params }); 
  }


}
