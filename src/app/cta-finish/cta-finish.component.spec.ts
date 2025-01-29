import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFinishComponent } from './cta-finish.component';

describe('CtaFinishComponent', () => {
  let component: CtaFinishComponent;
  let fixture: ComponentFixture<CtaFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaFinishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
