import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@src/app/domain/services/api.service';
import { HttpRequestMethods } from '@src/app/domain/model/HttpRequestMethods';

import { Category } from '../model/Category';

@Injectable()
export class CategoriesService {
  constructor(private apiService: ApiService) {}

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
