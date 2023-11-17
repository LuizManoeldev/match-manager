import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerComponent } from './create-player.component';

describe('CreatePlayerComponent', () => {
  let component: CreatePlayerComponent;
  let fixture: ComponentFixture<CreatePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlayerComponent]
    });
    fixture = TestBed.createComponent(CreatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
