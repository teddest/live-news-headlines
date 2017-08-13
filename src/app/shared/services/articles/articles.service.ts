import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

export interface IArticle {
  author: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface IArticles {
  source: string;
  sortBy: string;
  articles: Array<IArticle>;
}

@Injectable()
export class ArticlesService {
  private _newsApiBaseUri: string = environment.newsApiBaseUri;

  constructor(private http: HttpClient) { }

  public getArticlesBySource(source, sortBy = 'top') {
    return this.http.get<IArticles>(`${this._newsApiBaseUri}/articles?source=${source}&sortBy=${sortBy}`)
      .map(response => {
        return response;
      });
  }

}
