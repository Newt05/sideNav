import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAssetsComponent } from './core-assets.component';

describe('CoreAssetsComponent', () => {
  let component: CoreAssetsComponent;
  let fixture: ComponentFixture<CoreAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreAssetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
