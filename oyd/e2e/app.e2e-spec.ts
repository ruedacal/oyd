import { OydPage } from './app.po';

describe('oyd App', function() {
  let page: OydPage;

  beforeEach(() => {
    page = new OydPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
