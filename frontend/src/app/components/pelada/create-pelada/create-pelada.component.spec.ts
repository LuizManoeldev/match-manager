import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeladaComponent } from './create-pelada.component';

describe('CreatePeladaComponent', () => {
  let component: CreatePeladaComponent;
  let fixture: ComponentFixture<CreatePeladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePeladaComponent]
    });
    fixture = TestBed.createComponent(CreatePeladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
