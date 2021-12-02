import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLastWeekComponent } from './payment-last-week.component';

describe('PaymentLastWeekComponent', () => {
  let component: PaymentLastWeekComponent;
  let fixture: ComponentFixture<PaymentLastWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentLastWeekComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentLastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
