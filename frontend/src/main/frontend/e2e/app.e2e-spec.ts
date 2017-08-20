import { SimpleRouterExamplePage } from './app.po';

describe('simple-router-example App', () => {
  let page: SimpleRouterExamplePage;

  beforeEach(() => {
    page = new SimpleRouterExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
