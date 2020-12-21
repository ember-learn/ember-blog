import EmpressApplicationRoute from 'empress-blog/routes/application';
import { inject as service } from '@ember/service';


export default class ApplicationRoute extends EmpressApplicationRoute {
  @service metrics;
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName ?? 'unknown';

      // this is constant for this app and is only used to identify page views in the GA dashboard
      const hostname = 'blog.emberjs.com';

      this.metrics.trackPage({ page, title, hostname });
    });
  }
}
