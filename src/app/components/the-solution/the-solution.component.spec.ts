import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSolutionComponent } from './the-solution.component';

describe('PortfolioComponent', () => {
  let component: TheSolutionComponent;
  let fixture: ComponentFixture<TheSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
