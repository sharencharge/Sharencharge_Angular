import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorneShowComponent } from './borne-show.component';

describe('BorneShowComponent', () => {
  let component: BorneShowComponent;
  let fixture: ComponentFixture<BorneShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorneShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorneShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
