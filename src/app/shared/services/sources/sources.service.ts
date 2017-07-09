import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

export interface ISource {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
  sortBysAvailable: Array<string>;
}

@Injectable()
export class SourcesService {
  private _newsApiBaseUri: string = environment.newsApiBaseUri;

  constructor(private http: Http) { }

  public getSources(language: string = 'en') {
    return this.http.get(`${this._newsApiBaseUri}/sources?language=${language}`)
      .map(response => {
        return response.json();
      });
  }
}
