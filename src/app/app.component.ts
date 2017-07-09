import { Component, OnInit } from '@angular/core';

import { ArticlesService, SourcesService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Get the latest headlines from over 70 news sources and blogs.';
  public sources: Array<any>;
  public selectedSource: any;
  public articles: Array<any>;

  constructor(private articlesService: ArticlesService,
    private sourcesService: SourcesService) { }

  public getSources() {
    this.sourcesService.getSources()
      .subscribe(response => {
        this.sources = response.sources;
      })
  }

  public getArticlesBySource(source) {
    this.articlesService
      .getArticlesBySource(source.id)
      .subscribe(response => {

        window.scrollTo(0, 0);

        this.selectedSource = source;
        this.articles = response.articles
      });
  }

  ngOnInit() {
    this.getSources();
  }

}
