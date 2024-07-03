import {
  AfterViewInit,
  Component,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FeatureLoaderService } from './service/feature-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'ng-lazy-loading-components';

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private featureLoaderService: FeatureLoaderService) {}

  ngAfterViewInit(): void {
    this.loadDashboardFeature();
  }

  /**
   * Loads the dashboard feature component into the specified container.
   * If the container is undefined, it throws an error.
   * Subscribes to the featureRequested event emitted by the dashboard component,
   * which triggers the handleFeatureRequested method with the event key.
   */
  private loadDashboardFeature(): void {
    if (!this.container) {
      throw new Error('Container is undefined');
    }

    this.featureLoaderService
      .loadDashboardFeatureComponent(this.container)
      .then((dashboardComponent) => {
        dashboardComponent.featureRequested!.subscribe((eventKey: string) => {
          this.handleFeatureRequested(eventKey);
        });
      })
      .catch((error) => {
        console.error('Error loading dashboard feature component:', error);
      });
  }

  /**
   * Handles the featureRequested event by loading the corresponding feature component
   * based on the provided event key. If the loaded component has a backToDashboardRequested event,
   * it subscribes to it and reloads the dashboard feature upon invocation.
   */
  private handleFeatureRequested(eventKey: string): void {
    if (!this.container) {
      throw new Error('Container is undefined');
    }

    this.loadFeature(eventKey)
      .then((loadedComponent) => {
        if (loadedComponent && 'backToDashboardRequested' in loadedComponent) {
          const eventEmitter = (
            loadedComponent as { backToDashboardRequested: EventEmitter<void> }
          ).backToDashboardRequested;
          eventEmitter.subscribe(() => {
            this.loadDashboardFeature();
          });
        } else {
          console.error(
            'Loaded component does not have backToDashboardRequested.',
          );
        }
      })
      .catch((error) => {
        console.error('Error loading feature component:', error);
      });
  }

  /**
   * Loads the appropriate feature component based on the provided event key.
   * Supports loading blog and about-us feature components.
   * Returns a promise that resolves to the loaded component.
   */
  private loadFeature(eventKey: string): Promise<any> {
    let loadFeaturePromise: Promise<any>;

    switch (eventKey) {
      case 'blog':
        loadFeaturePromise = this.featureLoaderService.loadBlogFeatureComponent(
          this.container,
        );
        break;
      case 'about-us':
        loadFeaturePromise =
          this.featureLoaderService.loadAboutUsFeatureComponent(this.container);
        break;
      default:
        console.error('Unsupported eventKey:', eventKey);
        return Promise.reject('Unsupported eventKey');
    }

    return loadFeaturePromise;
  }
}
