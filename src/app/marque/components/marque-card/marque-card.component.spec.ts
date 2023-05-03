import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueCardComponent } from './marque-card.component';

describe('MarqueCardComponent', () => {
  let component: MarqueCardComponent;
  let fixture: ComponentFixture<MarqueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
