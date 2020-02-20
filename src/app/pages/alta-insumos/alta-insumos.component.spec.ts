import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaInsumosComponent } from './alta-insumos.component';

describe('AltaInsumosComponent', () => {
  let component: AltaInsumosComponent;
  let fixture: ComponentFixture<AltaInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
