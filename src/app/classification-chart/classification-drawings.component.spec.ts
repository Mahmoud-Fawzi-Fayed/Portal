import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationDrawingsComponent } from './classification-drawings.component';

describe('ClassificationDrawingsComponent', () => {
  let component: ClassificationDrawingsComponent;
  let fixture: ComponentFixture<ClassificationDrawingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificationDrawingsComponent]
    });
    fixture = TestBed.createComponent(ClassificationDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
