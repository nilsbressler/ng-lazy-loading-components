import { Resolve } from '@angular/router';
import { AboutUsFeatureComponent } from '../../features/about-us/about-us-feature.component';

export class AboutUsFeatureResolver
  implements Resolve<typeof AboutUsFeatureComponent>
{
  /**
   * Resolve AboutUsFeatureComponent type asynchronously.
   * @returns Promise
   */
  resolve(): Promise<typeof AboutUsFeatureComponent> {
    // Dynamically import the ServicePageComponent
    return import('../../features/about-us/about-us-feature.component').then(
      (m) => m.AboutUsFeatureComponent,
    );
  }
}
