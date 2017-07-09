import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ArticlesService {
  private _newsApiBaseUri: string = environment.newsApiBaseUri;

  constructor(private http: Http) { }

  public getArticlesBySource(source, sortBy = 'top') {
    return this.http.get(`${this._newsApiBaseUri}/articles?source=${source}&sortBy=${sortBy}`)
      .map(response => {
        return response.json();
      });
  }

}
