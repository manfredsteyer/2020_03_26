import { async, TestBed } from '@angular/core/testing';
import { TwaiceFeatureLiveDataModule } from './twaice-feature-live-data.module';

describe('TwaiceFeatureLiveDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TwaiceFeatureLiveDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TwaiceFeatureLiveDataModule).toBeDefined();
  });
});
