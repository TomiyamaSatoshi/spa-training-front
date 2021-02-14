import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, mergeMap } from 'rxjs/operators'
import { ARTICLES } from "../models/mock-article";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(
            mergeMap(() => {
                console.log('[MockBackend] URL: ' + req.url);

                if (req.method === 'GET') {
                    console.log('GETメソッド');
                    if (req.url.endsWith('/article/list')) {
                        const begin = parseInt(req.params.get('offset'), 10);
                        const end   = parseInt(req.params.get('limit'), 10);
                        console.log('mock /article/list');
                        return of(new HttpResponse({ status: 200, body: ARTICLES.slice(begin, end) }));
                    }
                    else if (req.url.endsWith('/article/count')) {
                        return of(new HttpResponse({ status: 200, body: { count: ARTICLES.length }}));
                    }
                    // idに紐付いた記事の詳細情報取得
                    else if (req.url.includes('/article')){
                        const id = parseInt(req.url.split('/')[4], 10);
                        console.log('mock /article');
                        return of( new HttpResponse({ status: 200, body: ARTICLES[id - 1] }));
                    }

                } else if (req.method === 'POST') {
                    console.log('POSTメソッド');
                    if (req.url.endsWith('/article')
                        && req.body.articleTitle
                        && req.body.articleContent) {
                        console.log('mock /article');
                        return of(new HttpResponse({ status: 200, body: { message: 'OK' }}));
                    }
                    // 記事にコメントする
                    else if (req.url.endsWith('/reply') && req.body.replyContent && req.body.articleId) {
                        console.log('mock /reply');
                        return of( new HttpResponse({ status: 200, body: { message: 'OK' } }));
                    }
                    // 記事にいいねする
                    else if (req.url.endsWith('/article/nice') && req.params.has('articleId')) {
                        console.log('mock /article/nice');
                        return of ( new HttpResponse({ status: 200, body: { message: 'OK' }}));
                    }
                    console.log(req.params.has('articleId'));
                }
                return next.handle(req);
            }),
            delay(1000),
        );
    }
}