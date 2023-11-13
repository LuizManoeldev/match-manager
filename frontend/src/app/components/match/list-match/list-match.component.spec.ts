import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchComponent } from './list-match.component';

describe('ListMatchComponent', () => {
  let component: ListMatchComponent;
  let fixture: ComponentFixture<ListMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMatchComponent]
    });
    fixture = TestBed.createComponent(ListMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
