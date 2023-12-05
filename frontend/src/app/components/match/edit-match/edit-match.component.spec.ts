import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatchComponent } from './edit-match.component';

describe('EditMatchComponent', () => {
  let component: EditMatchComponent;
  let fixture: ComponentFixture<EditMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMatchComponent]
    });
    fixture = TestBed.createComponent(EditMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
