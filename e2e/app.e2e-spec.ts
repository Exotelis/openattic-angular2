import { OpenatticPage } from './app.po';

describe('openattic App', function() {
  let page: OpenatticPage;

  beforeEach(() => {
    page = new OpenatticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
