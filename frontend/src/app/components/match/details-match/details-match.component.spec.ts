import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMatchComponent } from './details-match.component';

describe('DetailsMatchComponent', () => {
  let component: DetailsMatchComponent;
  let fixture: ComponentFixture<DetailsMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMatchComponent]
    });
    fixture = TestBed.createComponent(DetailsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
