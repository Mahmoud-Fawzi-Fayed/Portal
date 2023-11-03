import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMediumComponent } from './navbar-medium.component';

describe('NavbarMediumComponent', () => {
  let component: NavbarMediumComponent;
  let fixture: ComponentFixture<NavbarMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMediumComponent]
    });
    fixture = TestBed.createComponent(NavbarMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
