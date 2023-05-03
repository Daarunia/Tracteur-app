import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracteurCardComponent } from './tracteur-card.component';

describe('TracteurCardComponent', () => {
  let component: TracteurCardComponent;
  let fixture: ComponentFixture<TracteurCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracteurCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracteurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
