import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUserComponent } from './formulaire-user.component';

describe('FormulaireUserComponent', () => {
  let component: FormulaireUserComponent;
  let fixture: ComponentFixture<FormulaireUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
