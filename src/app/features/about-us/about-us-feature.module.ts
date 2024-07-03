import { NgModule } from '@angular/core';
import { AboutUsFeatureComponent } from './about-us-feature.component';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@NgModule({
  declarations: [AboutUsFeatureComponent],
  imports: [CommonModule, MatIcon, MatToolbar],
  exports: [AboutUsFeatureComponent],
})
export class AboutUsFeatureModule {}
