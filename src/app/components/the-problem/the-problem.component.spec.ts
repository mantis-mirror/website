import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProblemComponent } from './the-problem.component';

describe('ServicesComponent', () => {
  let component: TheProblemComponent;
  let fixture: ComponentFixture<TheProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
