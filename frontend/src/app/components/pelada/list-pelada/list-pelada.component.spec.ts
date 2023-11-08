import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeladaComponent } from './list-pelada.component';

describe('ListPeladaComponent', () => {
  let component: ListPeladaComponent;
  let fixture: ComponentFixture<ListPeladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPeladaComponent]
    });
    fixture = TestBed.createComponent(ListPeladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
