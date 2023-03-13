import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDetailComponent } from './profil-detail.component';

describe('ProfilDetailComponent', () => {
  let component: ProfilDetailComponent;
  let fixture: ComponentFixture<ProfilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
