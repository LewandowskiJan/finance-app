import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpRequestMethods } from '@my-lib/util';

import { GlobalApiService } from '@src/app/modules/shared/services/global-api.service';

import { Category } from '../model/Category';

@Injectable()
export class CategoriesService {
  constructor(private apiService: GlobalApiService) {}

  readCategories(): Observable<Category[] | HttpErrorResponse> {
    return this.apiService.request<Category[], HttpErrorResponse>('dictionary/category/all', {
      method: HttpRequestMethods.GET,
    });
  }

  createCategory(category: Category): Observable<Category | HttpErrorResponse> {
    return this.apiService.request<Category, HttpErrorResponse>('dictionary/category/add', {
      method: HttpRequestMethods.POST,
      body: category,
    });
  }

  deleteCategory(id: string): Observable<string | HttpErrorResponse> {
    return this.apiService
      .request<string, HttpErrorResponse>('dictionary/category', {
        method: HttpRequestMethods.DELETE,
        pathParam: id,
      })
      .pipe(map((res) => id));
  }
}
