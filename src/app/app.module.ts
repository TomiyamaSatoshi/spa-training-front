import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeadlinePipe } from './pipes/headline.pipe';
import { ThumbnailDirective } from './directives/thumbnail.directive';
import { AppErrorHandler } from './common/app-error-handler';
import { environment } from 'src/environments/environment';
import { ArticleCreateTemplateComponent } from './components/article-create/article-create-template/article-create-template.component';
import { ArticleCreateReactiveComponent } from './components/article-create/article-create-reactive/article-create-reactive.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PagenationComponent } from './components/pagenation/pagenation.component';

const httpInterceptorProviders = environment.httpInterceptorProviders;

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeadlinePipe,
    ThumbnailDirective,
    ArticleCreateTemplateComponent,
    ArticleCreateReactiveComponent,
    ArticleDetailComponent,
    LoginComponent,
    PagenationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: [],
      }
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
