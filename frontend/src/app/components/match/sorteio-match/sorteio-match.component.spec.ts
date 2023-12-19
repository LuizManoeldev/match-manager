import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioMatchComponent } from './sorteio-match.component';

describe('SorteioMatchComponent', () => {
  let component: SorteioMatchComponent;
  let fixture: ComponentFixture<SorteioMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorteioMatchComponent]
    });
    fixture = TestBed.createComponent(SorteioMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
