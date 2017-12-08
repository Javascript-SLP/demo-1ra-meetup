import { FacebookAngular4Page } from './app.po';

describe('facebook-angular4 App', function() {
  let page: FacebookAngular4Page;

  beforeEach(() => {
    page = new FacebookAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
