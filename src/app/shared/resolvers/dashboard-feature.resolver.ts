import { DashboardFeatureComponent } from '../../features/dashboard/dashboard-feature.component';
import { Resolve } from '@angular/router';

export class DashboardFeatureResolver
  implements Resolve<typeof DashboardFeatureComponent>
{
  /**
   * Resolve DashboardFeatureComponent type asynchronously.
   * @returns Promise
   */
  resolve(): Promise<typeof DashboardFeatureComponent> {
    return import('../../features/dashboard/dashboard-feature.component').then(
      (m) => m.DashboardFeatureComponent,
    );
  }
}
