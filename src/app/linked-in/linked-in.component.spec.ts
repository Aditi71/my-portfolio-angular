import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInComponent } from './linked-in.component';

describe('LinkedInComponent', () => {
  let component: LinkedInComponent;
  let fixture: ComponentFixture<LinkedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedInComponent]
    });
    fixture = TestBed.createComponent(LinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
