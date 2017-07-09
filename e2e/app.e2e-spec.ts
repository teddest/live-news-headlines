import { LiveNewsHeadlinesPage } from './app.po';

describe('live-news-headlines App', () => {
  let page: LiveNewsHeadlinesPage;

  beforeEach(() => {
    page = new LiveNewsHeadlinesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
