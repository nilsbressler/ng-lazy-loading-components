import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-us-feature',
  templateUrl: './about-us-feature.component.html',
  styleUrl: './about-us-feature.component.scss',
})
export class AboutUsFeatureComponent {
  @Output() backToDashboardRequested: EventEmitter<void> =
    new EventEmitter<void>();

  requestBackToDashboard(): void {
    this.backToDashboardRequested.emit();
  }
}
