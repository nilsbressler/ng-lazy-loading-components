import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutUsFeatureResolver } from './shared/resolvers/about-us-feature.resolver';
import { BlogFeatureResolver } from './shared/resolvers/blog-feature.resolver';
import { DashboardFeatureResolver } from './shared/resolvers/dashboard-feature.resolver';
import { DashboardFeatureModule } from './features/dashboard/dashboard-feature.module';
import { BlogFeatureModule } from './features/blog/blog-feature.module';
import { AboutUsFeatureModule } from './features/about-us/about-us-feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardFeatureModule,
    BlogFeatureModule,
    AboutUsFeatureModule,
  ],
  providers: [
    provideAnimationsAsync(),
    AboutUsFeatureResolver,
    BlogFeatureResolver,
    DashboardFeatureResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
