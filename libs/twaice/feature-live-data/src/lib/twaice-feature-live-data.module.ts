import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SharedUiTileModule } from '@twice-ui/shared/ui-tile';

@NgModule({
  imports: [CommonModule, SharedUiTileModule],
  declarations: [MainDashboardComponent],
  exports: [MainDashboardComponent]
})
export class TwaiceFeatureLiveDataModule {}
