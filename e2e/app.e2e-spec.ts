import { ExpressWebPage } from './app.po';

describe('express-web App', function() {
  let page: ExpressWebPage;

  beforeEach(() => {
    page = new ExpressWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
