import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorneListComponent } from './borne-list.component';

describe('BorneListComponent', () => {
  let component: BorneListComponent;
  let fixture: ComponentFixture<BorneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
