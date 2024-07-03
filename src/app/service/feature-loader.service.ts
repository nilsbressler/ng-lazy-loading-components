import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { AboutUsFeatureResolver } from '../shared/resolvers/about-us-feature.resolver';
import { BlogFeatureResolver } from '../shared/resolvers/blog-feature.resolver';
import { DashboardFeatureResolver } from '../shared/resolvers/dashboard-feature.resolver';
import { AboutUsFeatureComponent } from '../features/about-us/about-us-feature.component';
import { BlogFeatureComponent } from '../features/blog/blog-feature.component';
import { DashboardFeatureComponent } from '../features/dashboard/dashboard-feature.component';

@Injectable({
  providedIn: 'root',
})
export class FeatureLoaderService {
  constructor(
    private injector: Injector,
    private aboutUsFeatureResolver: AboutUsFeatureResolver,
    private blogFeatureResolver: BlogFeatureResolver,
    private dashboardFeatureResolver: DashboardFeatureResolver,
  ) {}

  /**
   * Asynchronously resolves and loads the About Us feature component into the container.
   */
  async loadAboutUsFeatureComponent(
    container: ViewContainerRef,
  ): Promise<AboutUsFeatureComponent> {
    return this.loadFeatureComponent(
      () => this.aboutUsFeatureResolver.resolve(), // Resolve the Home Feature component asynchronously
      container,
    );
  }

  /**
   * Asynchronously resolves and loads the Blog feature component into the container.
   */
  async loadBlogFeatureComponent(
    container: ViewContainerRef,
  ): Promise<BlogFeatureComponent> {
    return this.loadFeatureComponent(
      () => this.blogFeatureResolver.resolve(),
      container,
    );
  }

  /**
   * Asynchronously resolves and loads the Dashboard feature component into the container.
   */
  async loadDashboardFeatureComponent(
    container: ViewContainerRef,
  ): Promise<DashboardFeatureComponent> {
    return this.loadFeatureComponent(
      () => this.dashboardFeatureResolver.resolve(),
      container,
    );
  }

  /**
   * Generic method to load a feature component by resolving it asynchronously
   * and creating the component within the container.
   * Clears the container before injecting the new component instance.
   */
  private async loadFeatureComponent<T>(
    resolver: () => Promise<Type<T>>,
    container: ViewContainerRef,
  ): Promise<T> {
    const featureComponent = await resolver();

    container.clear();

    const componentRef = container.createComponent(featureComponent, {
      injector: this.injector,
    });

    return componentRef.instance;
  }
}
