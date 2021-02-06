import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptor } from "src/app/interceptors/common-interceptor";

export const environment = {
  production: true,
  homeUrl: 'http://localhost:4200',
  apiUrl: 'http://localhost:8080',

  httpInterceptorProviders: [
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
};
