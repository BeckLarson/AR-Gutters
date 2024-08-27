import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBarComponent } from './google-bar.component';

describe('GoogleBarComponent', () => {
  let component: GoogleBarComponent;
  let fixture: ComponentFixture<GoogleBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleBarComponent]
    });
    fixture = TestBed.createComponent(GoogleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
