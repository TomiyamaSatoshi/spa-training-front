import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected handleError (error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequestError(error));
    } 
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }
}
