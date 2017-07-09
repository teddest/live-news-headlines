import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

@Injectable()
export class SourcesService {
  private _newsApiBaseUri: string = environment.newsApiBaseUri;

  constructor(private http: Http) { }

  public getSources() {
    return this.http.get(`${this._newsApiBaseUri}/sources?language=en`)
      .map(response => {
        return response.json();
      });
  }

  public getArticlesBySource(source) {

  }
}
