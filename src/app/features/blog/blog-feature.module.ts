import { NgModule } from '@angular/core';
import { BlogFeatureComponent } from './blog-feature.component';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [BlogFeatureComponent],
  imports: [CommonModule, MatToolbar, MatButton, MatIcon],
  exports: [BlogFeatureComponent],
})
export class BlogFeatureModule {}
