import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSideMenuComponent } from './profil-side-menu.component';

describe('ProfilSideMenuComponent', () => {
  let component: ProfilSideMenuComponent;
  let fixture: ComponentFixture<ProfilSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
