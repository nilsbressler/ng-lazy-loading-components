import { Resolve } from '@angular/router';
import { BlogFeatureComponent } from '../../features/blog/blog-feature.component';

export class BlogFeatureResolver
  implements Resolve<typeof BlogFeatureComponent>
{
  /**
   * Resolve BlogFeatureComponent type asynchronously.
   * @returns Promise
   */
  resolve(): Promise<typeof BlogFeatureComponent> {
    return import('../../features/blog/blog-feature.component').then(
      (m) => m.BlogFeatureComponent,
    );
  }
}
