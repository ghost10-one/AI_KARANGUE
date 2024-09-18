import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroSectionComponent } from './ero-section.component';

describe('EroSectionComponent', () => {
  let component: EroSectionComponent;
  let fixture: ComponentFixture<EroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
