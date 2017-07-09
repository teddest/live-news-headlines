import { Component, OnInit, Input } from '@angular/core';

import { ArticlesService } from '../../../shared/services';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  private _source: any;

  @Input('source')
  set source(source: any) {
    this._source = source;
    this.getArticles();
  }
  get source(): any {
    return this._source;
  }

  public articles;

  constructor(private articlesService: ArticlesService) { }

  public getArticles() {
    this.articlesService
      .getArticlesBySource(this._source.id)
      .subscribe(response => {
        this.articles = response.articles
      });
  }

  ngOnInit() {
  }

}
