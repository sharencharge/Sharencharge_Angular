import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorneDetailsComponent } from './borne-details.component';

describe('BorneDetailsComponent', () => {
  let component: BorneDetailsComponent;
  let fixture: ComponentFixture<BorneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
