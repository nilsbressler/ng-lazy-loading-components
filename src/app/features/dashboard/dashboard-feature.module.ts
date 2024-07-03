import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFeatureComponent } from './dashboard-feature.component';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@NgModule({
  declarations: [DashboardFeatureComponent],
  imports: [CommonModule, MatButton, MatToolbar],
  exports: [DashboardFeatureComponent],
})
export class DashboardFeatureModule {}
