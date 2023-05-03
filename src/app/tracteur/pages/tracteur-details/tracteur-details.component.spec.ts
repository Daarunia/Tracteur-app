import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracteurDetailsComponent } from './tracteur-details.component';

describe('TracteurDetailsComponent', () => {
  let component: TracteurDetailsComponent;
  let fixture: ComponentFixture<TracteurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracteurDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracteurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
