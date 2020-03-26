import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { TwaiceFeatureLiveDataModule } from '@twice-ui/twaice/feature-live-data';


@NgModule({
  imports: [CommonModule, TwaiceFeatureLiveDataModule],
  declarations: [TileComponent],
  exports: [TileComponent]
})
export class SharedUiTileModule {}
