import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-feature',
  templateUrl: './dashboard-feature.component.html',
  styleUrl: './dashboard-feature.component.scss',
})
export class DashboardFeatureComponent {
  @Output() featureRequested: EventEmitter<string> = new EventEmitter<string>();

  requestFeature(eventKey: string): void {
    this.featureRequested.emit(eventKey);
  }
}
