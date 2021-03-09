import Route from '@ember/routing/route';

export default class PageRoute extends Route {
  templateName = 'index';

  model(params) {
    return this.store.query('content', {
      page: `/content/content-${params.id}.json`,
    });
  }
}
