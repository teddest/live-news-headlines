import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

export interface ISources {
  sources: Array<ISource>;
}

@Injectable()
export class SourcesService {
  private _newsApiBaseUri: string = environment.newsApiBaseUri;

  constructor(private http: HttpClient) { }

  public getSources(language: string = 'en') {
    return this.http.get<ISources>(`${this._newsApiBaseUri}/sources?language=${language}`)
      .map(response => {
        return response.sources;
      });
  }
}
