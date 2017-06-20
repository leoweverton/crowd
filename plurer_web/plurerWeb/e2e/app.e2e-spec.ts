import { PlurerWebPage } from './app.po';

describe('plurer-web App', () => {
  let page: PlurerWebPage;

  beforeEach(() => {
    page = new PlurerWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
