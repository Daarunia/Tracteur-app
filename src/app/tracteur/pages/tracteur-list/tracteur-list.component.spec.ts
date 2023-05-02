import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracteurListComponent } from './tracteur-list.component';

describe('TracteurListComponent', () => {
  let component: TracteurListComponent;
  let fixture: ComponentFixture<TracteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracteurListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
