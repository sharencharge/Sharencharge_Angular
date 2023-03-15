import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBorneComponent } from './form-borne.component';

describe('FormBorneComponent', () => {
  let component: FormBorneComponent;
  let fixture: ComponentFixture<FormBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBorneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
