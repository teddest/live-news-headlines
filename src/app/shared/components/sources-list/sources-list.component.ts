import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SourcesService, ISource } from '../../../shared/services';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit {
  public sources: any;

  @Output() selectedSource: EventEmitter<ISource> = new EventEmitter();

  constructor(private sourcesService: SourcesService) { }

  public sourceClicked(source: ISource) {
    this.selectedSource.emit(source);
  }

  ngOnInit() {
    this.sourcesService
      .getSources()
      .subscribe(response => {
        this.sources = response;
      });
  }

}
