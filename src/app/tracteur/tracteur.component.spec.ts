import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracteurComponent } from './tracteur.component';

describe('TracteurComponent', () => {
  let component: TracteurComponent;
  let fixture: ComponentFixture<TracteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
