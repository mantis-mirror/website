import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberConfirmationComponent } from './subscriber-confirmation.component';

describe('SubscriberConfirmationComponent', () => {
  let component: SubscriberConfirmationComponent;
  let fixture: ComponentFixture<SubscriberConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
