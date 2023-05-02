import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracteurFormComponent } from './tracteur-form.component';

describe('TracteurFormComponent', () => {
  let component: TracteurFormComponent;
  let fixture: ComponentFixture<TracteurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracteurFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracteurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
