import { Component } from '@angular/core';

import { ISource } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedSource: ISource;

  constructor() { }

  onSelectedSource(source: ISource) {
    window.scrollTo(0, 0);
    this.selectedSource = source;
  }
}
