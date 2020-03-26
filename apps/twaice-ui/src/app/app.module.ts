import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwaiceFeatureLiveDataModule } from '@twice-ui/twaice/feature-live-data';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TwaiceFeatureLiveDataModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
