import { CommaclubPage } from './app.po';

describe('commaclub App', function() {
  let page: CommaclubPage;

  beforeEach(() => {
    page = new CommaclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
